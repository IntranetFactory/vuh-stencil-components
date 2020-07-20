import {
  Component,
  h,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-search-bar',
  styleUrl: 'k-search-bar.scss',
  shadow: true
})
export class KSearchBar {
  @Prop() type: 'solid' | 'outlined' = 'solid';
  @Prop({ mutable: true }) value?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() name?: string = '';
  @Prop() placeholder?: string = 'Search';

  @State() inputEl: HTMLElement;
  @Event() valueChange: EventEmitter;

  @State() hasText: boolean = false;

  @Watch('value')
  valueChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.inputEl['value'] = newValue;
    }

    if (newValue) {
      this.hasText = true;
    } else {
      this.hasText = false;
    }
  }

  componentWillRender() {
    if (this.value) {
      this.hasText = true;
    }
  }

  inputChanged(ev: any) {
    this.value = ev?.target?.value;
    this.valueChange.emit(this.value);
  }

  handleCleanContent() {
    this.value = '';
  }

  render() {
    return (
      <Host>
        {this.type === 'solid' ? (
          <div class="KSearchBar-solid">
            <input
              ref={(el: HTMLElement) => (this.inputEl = el)}
              class="KSearchBar-input"
              placeholder={this.placeholder}
              disabled={this.disabled}
              name={this.name}
              value={this.value}
              onInput={this.inputChanged.bind(this)}
            />
            <i
              class={clsx('KSearchBar-left vuh-search', {
                'KSearchBar-left--is-disabled': this.disabled,
                'KSearchBar-left--is-highlighted': this.hasText
              })}
            />
            <i
              onClick={this.handleCleanContent.bind(this)}
              class={clsx('KSearchBar-right vuh-close', {
                'KSearchBar-right--is-highlighted': this.hasText
              })}
            />
          </div>
        ) : (
          <div class="KSearchBar-outlined">
            <input
              ref={(el: HTMLElement) => (this.inputEl = el)}
              id="k-search-bar-outlined"
              placeholder=" "
              disabled={this.disabled}
              type={this.type}
              name={this.name}
              value={this.value}
              onInput={this.inputChanged.bind(this)}
            />
            <label htmlFor="k-search-bar-outlined">{this.placeholder}</label>

            {!this.hasText ? (
              <i class={clsx('KSearchBar-icon vuh-search')} />
            ) : (
              <i
                onClick={this.handleCleanContent.bind(this)}
                class={clsx('KSearchBar-icon vuh-close')}
              />
            )}
          </div>
        )}
      </Host>
    );
  }
}

import {
  Component,
  h,
  Host,
  Listen,
  Element,
  State,
  Prop
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-dropdown',
  styleUrl: 'k-dropdown.scss',
  shadow: true
})
export class KDropdown {
  private slotted: HTMLCollection;

  @Element() el!: HTMLElement;

  @State() optionsEl?: HTMLElement;
  @State() value: any | null;
  @State() label: string = 'Default';
  @State() currentChecked: string = '';

  @Prop() disabled: boolean = false;
  @Prop() type?: 'button' | 'input' = 'button';
  // prop button
  @Prop() color: 'primary' | 'secondary' | 'terciary' = 'primary';
  // prop input
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() helperText?: string = '';

  componentWillLoad() {
    this.slotted = this.el.children;
    // set checked option by default
    const slottedArray = Array.from(this.slotted);

    slottedArray.forEach((slotEl, index) =>
      slotEl.setAttribute('k-dropdown-id', String(index))
    );

    let i = 0;
    for (i; i < slottedArray.length; i++) {
      if (this.slotted[i].attributes['checked']) {
        this.value = this.slotted[i].attributes['value'].value;
        this.label = this.slotted[i].innerHTML;
        this.currentChecked = String(i);
        break;
      } else {
        this.slotted[0].setAttribute('checked', 'true');
        this.value = this.slotted[0].attributes['value'].value;
        this.label = this.slotted[0].innerHTML;
        this.currentChecked = '0';
      }
    }
  }

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { value, label, id } = state.detail;
    if (value) {
      const currentValue = this.value;
      const newValue = value;

      this.toggleShowOptions();

      if (newValue !== currentValue) {
        this.value = newValue;
        this.label = label;
      }
    }
    this.slotted[this.currentChecked].removeAttribute('checked');
    this.currentChecked = id;
  }

  toggleShowOptions() {
    if (this.optionsEl.style.display === 'block') {
      this.optionsEl.style.display = 'none';
    } else {
      this.optionsEl.style.display = 'block';
    }
  }

  private isTypeButton = () => {
    return this.type === 'button';
  };

  private isTypeInput = () => {
    return this.type === 'input';
  };

  private isSuccess = () => {
    return this.validationState === 'success';
  };

  private isError = () => {
    return this.validationState === 'error';
  };

  render() {
    return (
      <Host class="KDropdown">
        <button
          class={clsx(
            'KDropdown-dispatcher',
            {
              'KDropdown-input': this.isTypeInput(),
              'KDropdown-button': this.isTypeButton(),
              '--is-valid': this.isTypeInput() && this.isSuccess(),
              '--is-invalid': this.isTypeInput() && this.isError()
            },
            [this.isTypeButton() && this.color]
          )}
          disabled={this.disabled}
          onClick={this.toggleShowOptions.bind(this)}
        >
          <span>{this.label}</span>
          <i class="KDropdown-icon vuh-keyboard_arrow_down"></i>
        </button>
        {this.helperText && this.isTypeInput() && (
          <span
            class={clsx('KDropdown-input-helper-text', {
              '--is-valid': this.isSuccess(),
              '--is-invalid': this.isError()
            })}
          >
            {this.helperText}
          </span>
        )}
        <div
          ref={(el: HTMLElement) => (this.optionsEl = el)}
          class="KDropdown-options"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
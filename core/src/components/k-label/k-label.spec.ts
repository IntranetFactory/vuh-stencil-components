import { newSpecPage } from '@stencil/core/testing';
import { KLabel } from './k-label';

describe('k-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KLabel],
      html: '<k-label></k-label>'
    });

    expect(root).toEqualHtml(`
      <k-label>
        <mock:shadow-root>
          <label class="KLabel">
            <slot></slot>
          </label>
        </mock:shadow-root>
      </k-label>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { KTypography } from './k-typography';

describe('k-typography', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KTypography],
      html: '<k-typography></k-typography>'
    });

    expect(root).toEqualHtml(`
      <k-typography>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </k-typography>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KTypography],
      html: `<k-typography variant="h1" color="primary"></k-typography>`
    });
    expect(root).toEqualHtml(`
      <k-typography variant="h1" color="primary" class="h1 primary">
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </k-typography>
    `);
  });
});

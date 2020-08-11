import readme from './readme.md';

export default {
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   */
  notes: readme,

  /**
   * The states array is a list of additional states to display your
   * component. This is kind of a lightweight version of the "chapters".
   * Each state can have a title, description, props and children.
   * A children must have a tag, innerText (it may be an empty string '')
   */
  states: [
    {
      title: 'Complete tab structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-tab-item',
          innerText: 'Tab 1',
          props: { current: true },
          children: []
        },
        {
          tag: 'k-tab-item',
          innerText: 'Tab 2',
          props: { current: false },
          children: []
        },
        {
          tag: 'k-tab-item',
          innerText: 'Tab 3',
          props: { current: false },
          children: []
        },
        {
          tag: 'k-tab-item',
          innerText: 'Tab 4',
          props: { current: false },
          children: []
        }
      ]
    }
  ]
};

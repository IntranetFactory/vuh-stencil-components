import readme from './readme.md';

export default {
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   */
  notes: readme
};

// // This is another way of creating a story
// export default (stories) => {
//   stories.add(
//     'KDialog',
//     () => `
//         <div style="margin: 2em"><k-dialog>
//             <k-dialog-content>
//                 <k-dialog-header>Dialog Header</k-dialog-header>
//                 <k-dialog-body style="width: 300px">
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
//                 </k-dialog-body>
//             </k-dialog-content>
//             <k-dialog-actions>
//                 <k-button style="margin-right: 16px;" color="terciary">Cancel</k-button>
//                 <k-button color="terciary">Discard</k-button>
//             </k-dialog-actions>
//         </k-dialog>
//         </div>
//       `,
//     { readme }
//   );
// };

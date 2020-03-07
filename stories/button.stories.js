import "../src/style/main.css";

export default {
  title: 'Button',
};

export const Default = () => `
  <h2>Primary button</h2>
  <button type="button" class="button button_type_primary">Normal</button>
  <button type="button" class="button button_type_primary" disabled>Disabled</button>

  <h2>Secondary button</h2>
  <button type="button" class="button button_type_secondary">Normal</button>
  <button type="button" class="button button_type_secondary" disabled>Disabled</button>
`;

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

  <h2>Small button</h2>
  <button type="button" class="button button_type_secondary button_size_s">Normal</button>
  <button type="button" class="button button_type_secondary button_size_s" disabled>Disabled</button>

  <h2>Icon button</h2>
  <h3>Normal</h3>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_settings">Settings</button>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_play">Run build</button>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_repeat">Rebuild</button>
  <h3>Disabled</h3>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_settings" disabled>Settings</button>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_play" disabled>Run build</button>
  <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_repeat" disabled>Rebuild</button>

  <h2>Small icon button</h2>
  <h3>Normal</h3>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_settings"></button>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_play"></button>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_repeat"></button>
  <h3>Disabled</h3>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_settings" disabled></button>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_play" disabled></button>
  <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_repeat" disabled></button>
`;

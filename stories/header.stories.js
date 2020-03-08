import "../src/style/main.css";

export default {
  title: 'Header',
};

export const Default = () => `
  <h2>Primary header</h2>
  <header class="header header_type_primary">
    <div class="content-box">
      School CI server
      <div class="header__extra">
        <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_play">
          <span class="header__button-text">Run build</span>
        </button>
        <button type="button" class="button button_type_secondary button_size_xs button_icon button_icon_settings"></button>
      </div>
    </div>
  </header>

  <h2>Secondary header</h2>
  <header class="header header_type_secondary">
    <div class="content-box">
      School CI server
      <div class="header__extra">
        <button type="button" class="button button_type_secondary button_size_s button_icon button_icon_settings">
          <span class="header__button-text">Settings</span>
        </button>
      </div>
    </div>
  </header>
`;
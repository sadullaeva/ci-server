import "../src/style/main.css";

export default {
  title: 'Build',
};

export const Default = () => `
  <h2>Success build</h2>
  <div class="build build_type_success">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta"></div>
  </div>

  <h2>Running build</h2>
  <div class="build build_type_running">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta"></div>
  </div>

  <h2>Failed build</h2>
  <div class="build build_type_failed">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta"></div>
  </div>
`;
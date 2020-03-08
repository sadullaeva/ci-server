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
    <div class="build__meta build__meta_horizontal">
      <div class="icon-text icon-text_type_primary icon-text_icon_commit">master</div>
      <div class="icon-text icon-text_type_primary icon-text_icon_user">Philip Kirkorov</div>
    </div>
    <div class="build__meta build__meta_vertical">
      <div class="icon-text icon-text_type_secondary icon-text_icon_calendar">21 янв, 03:06</div>
      <div class="icon-text icon-text_type_secondary icon-text_icon__stopwatch">1 ч 20 мин</div>
    </div>
  </div>

  <h2>Running build</h2>
  <div class="build build_type_running">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta build__meta_horizontal">
      <div class="icon-text icon-text_type_primary icon-text_icon_commit">master</div>
      <div class="icon-text icon-text_type_primary icon-text_icon_user">Philip Kirkorov</div>
    </div>
    <div class="build__meta build__meta_vertical">
      <div class="icon-text icon-text_type_secondary icon-text_icon_calendar">21 янв, 03:06</div>
      <div class="icon-text icon-text_type_secondary icon-text_icon__stopwatch">1 ч 20 мин</div>
    </div>
  </div>

  <h2>Failed build</h2>
  <div class="build build_type_failed">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta build__meta_horizontal">
      <div class="icon-text icon-text_type_primary icon-text_icon_commit">master</div>
      <div class="icon-text icon-text_type_primary icon-text_icon_user">Philip Kirkorov</div>
    </div>
    <div class="build__meta build__meta_vertical">
      <div class="icon-text icon-text_type_secondary icon-text_icon_calendar">21 янв, 03:06</div>
      <div class="icon-text icon-text_type_secondary icon-text_icon__stopwatch">1 ч 20 мин</div>
    </div>
  </div>

  <h2>Build size L</h2>
  <div class="build build_type_success build_size_l">
    <div class="build__content">
      <div class="build__number">#1368</div>
      <div class="build__message">add documentation for postgres scaler</div>
    </div>
    <div class="build__meta build__meta_horizontal">
      <div class="icon-text icon-text_type_primary icon-text_icon_commit">master</div>
      <div class="icon-text icon-text_type_primary icon-text_icon_user">Philip Kirkorov</div>
    </div>
    <div class="build__meta build__meta_horizontal">
      <div class="icon-text icon-text_type_primary icon-text_icon_calendar">21 янв, 03:06</div>
      <div class="icon-text icon-text_type_primary icon-text_icon__stopwatch">1 ч 20 мин</div>
    </div>
  </div>
`;

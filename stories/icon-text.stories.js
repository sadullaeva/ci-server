import "../src/style/main.css";

export default {
  title: 'Icon text',
};

export const Default = () => `
  <h2>Primary icon text</h2>
  <div class="icon-text icon-text_type_primary icon-text_icon_calendar">21 янв, 03:06</div>
  <div class="icon-text icon-text_type_primary icon-text_icon__stopwatch">1 ч 20 мин</div>
  <div class="icon-text icon-text_type_primary icon-text_icon_commit">master</div>
  <div class="icon-text icon-text_type_primary icon-text_icon_user">Philip Kirkorov</div>

  <h2>Secondary icon text</h2>
  <div class="icon-text icon-text_type_secondary icon-text_icon_calendar">21 янв, 03:06</div>
  <div class="icon-text icon-text_type_secondary icon-text_icon__stopwatch">1 ч 20 мин</div>
  <div class="icon-text icon-text_type_secondary icon-text_icon_commit">master</div>
  <div class="icon-text icon-text_type_secondary icon-text_icon_user">Philip Kirkorov</div>
`;
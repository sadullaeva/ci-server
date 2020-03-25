import "../style/main.css";

export default {
  title: 'Text field',
};

export const Default = () => `
  <h2>Text field required and empty</h2>
  <div class="text-field text-field_required">
    <label class="text-field__label">GitHub repository</label>
    <div class="text-field__input-container">
      <input type="text" placeholder="user-name/repo-name" class="text-field__input">
      <button type="button" class="text-field__reset"></button>
    </div>
  </div>

  <h2>Text field filled and clearable</h2>
  <div class="text-field text-field_clearable">
    <label class="text-field__label">Build command</label>
    <div class="text-field__input-container">
      <input type="text" placeholder="user-name/repo-name" value="npm ci && npm run build" class="text-field__input">
      <button type="button" class="text-field__reset"></button>
    </div>
  </div>

  <h2>Just text field</h2>
  <div class="text-field">
    <input type="text" placeholder="5" value="10" class="text-field__input">
  </div>
`;
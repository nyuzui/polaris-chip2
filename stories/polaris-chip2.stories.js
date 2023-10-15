import { html } from 'lit';
import '../src/polaris-chip2.js';

export default {
  title: 'PolarisChip2',
  component: 'polaris-chip2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-chip2
      style="--polaris-chip2-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-chip2>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};

import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import Login from "../pages/Login.vue";

test('Login component', async () => {
  expect(Login).toBeTruthy();
  const wrapper = mount(Login, {});
  await wrapper.get('button.login').click();
  expect(wrapper.text()).toContain("请输入邮箱地址");
  expect(wrapper.text()).toContain("请输入密码");
})
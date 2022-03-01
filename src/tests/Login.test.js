import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import Login from "../pages/Login.vue";
import { apolloClient } from "../graphql";
import { provideApolloClient } from "@vue/apollo-composable";

describe('Login component', () => {
  let wrapper;
  beforeEach(()=>{
    provideApolloClient(apolloClient);
    wrapper = mount(Login);
    // console.log(wrapper);
  });

  it("should render correctly", () => {
    expect(wrapper.text()).toContain('登录');
    expect(wrapper.text()).toContain('注册');
  });

  it('should show error info when click login button with empty input', async () => {
    let btn = wrapper.get('button.login');
    await btn.trigger('submit');
    expect(wrapper.text()).toContain("请输入邮箱地址");
    expect(wrapper.text()).toContain("请输入密码");
  });

  it("should show info to ask you fix your email address format", async () => {
    let emailInput = wrapper.get("input.email");
    emailInput.setValue("bad-email");
    let btn = wrapper.get('button.login');
    await btn.trigger('submit');
    expect(wrapper.text()).toContain("请输入有效的邮箱地址");
    expect(wrapper.text()).toContain("请输入密码");
  });

  it.todo("should show password didn't match.", async () => {
    let emailInput = wrapper.get("input.email");
    let passwordInput = wrapper.get("input.password");
    emailInput.setValue("liliaiziyou@gmail.com");
    passwordInput.setValue("badpassword");
    let btn = wrapper.get('button.login');
    await btn.trigger('submit');
    // todo: 等待服务器返回消息
    expect(wrapper.text()).toContain("Error: Password didn't match");
  });

  it.todo("should show user not found", async () => {
    let emailInput = wrapper.get("input.email");
    let passwordInput = wrapper.get("input.password");
    emailInput.setValue("notexist@gmail.com");
    passwordInput.setValue("notexist");
    let btn = wrapper.get('button.login');
    await btn.trigger('submit');
    // todo: 等待服务器返回消息
    expect(wrapper.text()).toContain(`Error: Couldn't find this user`);
  })
})
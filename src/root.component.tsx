import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Root(props) {
  return (
    <Wrapper>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type={"text"} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type={"password"} />
        </div>
        <div>
          <label htmlFor="rememberMe">Remember Me</label>
          <input id="rememberMe" type={"checkbox"} />
        </div>
        <button>Login</button>
      </form>
    </Wrapper>
  );
}

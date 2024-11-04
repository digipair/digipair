import { css } from 'lit';

export const styles = css`
  @keyframes bounce {
    from {
      width: 50px;
      height: 50px;
    }
    50% {
      width: 55px;
      height: 55px;
    }
    to {
      width: 50px;
      height: 50px;
    }
  }

  .container {
    position: absolute;
    top: 20px;
    bottom: 20px;
    right: 20px;
    left: 20px;
    line-height: 0.8;
  }

  .panel {
    position: absolute;
    top: -5px;
    right: -5px;
    height: 50px;
    border-radius: 20px 0 20px 20px;
    transition-property: width, background-color;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275),
      cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0s, 0s;
    box-shadow: rgba(0, 0, 0, 0.25) 4px 0.25rem 0.25rem;
    border: 1px solid rgb(134, 255, 0);
    width: 50px;
    background-color: rgb(255, 255, 255);
  }

  .logo {
    width: 70px;
    height: 70px;
    position: absolute;
    right: -15px;
    top: -15px;
    transition: scale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  }

  .logo {
    cursor: pointer;
  }
  .logo:hover {
    scale: 1.1;
  }

  .actions {
    position: absolute;
    right: -5px;
    top: 62px;
    text-align: right;
  }

  .actions.loading {
    display: none;
  }

  .actions .action {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    font-size: 12px;
    color: rgb(60, 60, 60);
    padding: 8px 14px;
    cursor: pointer;
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
    transform: scale(0.95);
    margin-bottom: 4px;
  }

  .actions .action:hover {
    transform: scale(1);
  }

  .result {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 20px 5px 0px 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0.25rem 0.75rem;
    border: 1px solid rgb(134, 255, 0);
    color: rgb(60, 60, 60);
  }
`;

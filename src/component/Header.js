import { h, render, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <a href="/" class="logo">
          <span class="icon-home" />
        </a>
        <Link href="/">
          <a class="button">Home</a>
        </Link>
        <Link href="/about">
          <a class="button">About</a>
        </Link>
        <Link href="/contact">
          <a class="button">Contact</a>
        </Link>
      </header>
    );
  }
}

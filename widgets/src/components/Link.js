import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    //this here is preventing  css and js file to reload
    event.preventDefault();
    window.history.pushState({}, "", href);

    //this indicate url just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;

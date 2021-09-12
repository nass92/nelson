import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonBottom';
import Logo from '../components/logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';
import { useRouteMatch } from "react-router-dom";

export const Projects = () => {
  const match = useRouteMatch("/projet/:id");
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={match.params.id} />
        <ButtonsBottom left={parseInt(match.params.id) === 1 ? '/': `/projet/${match.params.id - 1}`} right={parseInt(match.params.id) === 3 ?'/expo' : `/projet/${parseInt(match.params.id) + 1}`} />
      </div>
    </main>
  );
};
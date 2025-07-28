import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import krypto from "../assets/projects/krypto.png";
import portfolio from "../assets/projects/portfolio.png";
import xolanaWalletImg from "../assets/projects/xolanawallet.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xolanaWalletImg}
              isBlog={false}
              title="Xolana-Wallet"
              description="The Xolana Project is a decentralized application (DApp) built on the Solana blockchain. It provides a comprehensive toolset for creating, managing, and transferring tokens efficiently and securely."
              ghLink="https://github.com/YashGarg81/Xolana-Wallet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="NewFMN-master"
              description="A notes app powered by Node.js and Express.js with a front end crafted using React, Redux, and styled-components for a seamless writing experience."
              ghLink="https://github.com/YashGarg81/NewFMN-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="A crypto wallet interface showcasing token transactions, market insights, and user-friendly crypto management—all wrapped in sleek React components."
              ghLink="https://github.com/YashGarg81/MyPortfolio"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="wallet"
              description="A crypto wallet interface showcasing token transactions, market insights, and user-friendly crypto management—all wrapped in sleek React components."
              ghLink="https://github.com/YashGarg81/Wallet"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
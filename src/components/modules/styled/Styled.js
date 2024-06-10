"use client";

import styled from "styled-components";

export const SaveButton = styled.button`
  background-color: #3b83f63b;
  color: #3b82f6;
  border: none;
  font-family: yekanReg;
  padding: 4px;
  margin-left: 12px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3b82f6;
    color: #fff;
  }
`;

export const SocialMediaButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--card-bg-color);
  color: var(--button-color);
  border: none;
  padding: 2px 4px 0 4px;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--button-color);
    color: #fff;
  }
`;

export const PageButton = styled.button`
  background-color: var(--main-bg-color);
  font-family: yekanReg;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  padding: 8px 24px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 6px;
  border: ${(props) =>
    props.activity === "active" ? "1px solid #fff" : "none"};
`;

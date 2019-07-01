import React from "react";
import styled from "@emotion/styled";

const CheckBoxControl = styled.div`
  flex: 1 1 auto;
  position: relative;
  input[type="checkbox"]:not(:checked),
  input[type="checkbox"]:checked {
    position: absolute;
    left: -9999px;
  }
  input[type="checkbox"]:not(:checked) + label,
  input[type="checkbox"]:checked + label {
    position: relative;
    padding: 0;
    margin: 0;
    padding-left: calc(19px * 1.25);
    cursor: pointer;
    box-sizing: border-box;
    font-size: calc(19px * 0.8);
    font-weight: 500;
    color: #333;
    margin-bottom: 0;
    line-height: 19px !important;
  }
  input[type="checkbox"]:not(:checked) + label:before,
  input[type="checkbox"]:checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 19px;
    height: 19px;
    border: 2px solid #ccc;
    background: #fff;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    line-height: unset;
  }
  input[type="checkbox"]:not(:checked) + label:after,
  input[type="checkbox"]:checked + label:after {
    content: "\\2714";
    position: absolute;
    top: 0;
    left: calc(19px * 0.15);
    font-size: 19px;
    line-height: 19px;
    color: #333;
    transition: all 200ms;
    box-sizing: border-box;
  }
  input[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    transform: scale(0);
    box-sizing: border-box;
  }
  input[type="checkbox"]:checked + label:after {
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    transform: scale(1);
    box-sizing: border-box;
  }
  input[type="checkbox"]:disabled:not(:checked) + label:before,
  input[type="checkbox"]:disabled:checked + label:before {
    -webkit-box-shadow: none;
    box-shadow: none;
    box-sizing: border-box;
    border-color: #bbb;
    background-color: #ddd;
  }
  input[type="checkbox"]:disabled:checked + label:after {
    box-sizing: border-box;
    color: #999;
  }
  input[type="checkbox"]:disabled + label {
    box-sizing: border-box;
    color: #aaa;
  }
  input[type="checkbox"]:checked:focus + label:before,
  input[type="checkbox"]:not(:checked):focus + label:before {
    border: 2px dotted #333;
    box-sizing: border-box;
  }
  input[type="checkbox"] + label:hover:before {
    border: 2px solid #333 !important;
    box-sizing: border-box;
  }
`;

const CheckboxGroup = ({ children, style = {} }) => (
  <CheckBoxControl style={style}>{children}</CheckBoxControl>
);

export default CheckboxGroup
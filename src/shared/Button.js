import styled from "styled-components";

export const ButtonBlock = styled.div`
display: inline-block;
  .animate, .btn, .btn-border-o:before, .btn-border-o:after, .btn-border:before, .btn-border:after, .btn-border-rev-o:before, .btn-border-rev-o:after, .btn-border-rev:before, .btn-border-rev:after, .btn-fill-vert-o:before, .btn-fill-vert-o:after, .btn-fill-vert:before, .btn-fill-vert:after, .btn-fill-horz-o:before, .btn-fill-horz-o:after, .btn-fill-horz:before, .btn-fill-horz:after {
  transition: all 0.3s;
  }
  
  .btn {display: inline-block;
  line-height: 35px;
  margin: 8px;
  padding: 0 15px;
  font-size: 15px;
  position: relative;
  opacity: .999;
  border-radius: 3px;
  min-width: 150px;
  &:not(:disabled) {
      outline: none; 
      box-shadow: none;
      }
}

.btn-border-o {
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #B8B8B8;
}
.btn-border-o:before, .btn-border-o:after {
  content: '';
  border-style: solid;
  position: absolute;
  z-index: 5;
  border-radius: 3px;
  box-sizing: content-box;
}
.btn-border-o:before {
  width: 0;
  height: 100%;
  border-width: 1px 0 1px 0;
  top: -1px;
  left: 0;
  transition-delay: 0.05s;
}
.btn-border-o:after {
  width: 100%;
  height: 0;
  border-width: 0 1px 0 1px;
  top: 0;
  left: -1px;
}
.btn-border-o:hover:before {
  width: 100%;
}
.btn-border-o:hover:after {
  height: 100%;
}
.btn-border-o.btn-green:before, .btn-border-o.btn-green:after {
  border-color: #2ecc71;
}
.btn-border-o.btn-green:hover {
  color: #2ecc71;
}


`;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { SocialItem, SocialStyled,SocialStyledH3 ,IconDiv,SocialItemContent } from "./socialStyle";
const Social = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get("data/data.json").then((res) => {
      setSocial(res.data[0].social);
    });
  }, []);
  const updated = social.map((item) => {
    return (
      <SocialItem key={item.id} background={item.background}>
        <IconDiv>
          <i className={item.icon}></i>
        </IconDiv>
        <SocialItemContent>
          <SocialStyledH3>{item.name}</SocialStyledH3>
          <p>{item.title}</p>
        </SocialItemContent>
      </SocialItem>
    );
  });

  return <SocialStyled>{updated}</SocialStyled>;
};

export default Social;

import { WorkContainer, StyledWork, WorkItem ,Table} from "./workStyle";
import { useEffect, useState } from "react";
import axios from "axios";
const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get("data/data.json").then((res) => {
      setWorks(res.data);
    });
  }, []);

  const updated = works.map((item) => {
    return (
      <WorkItem first={item.id} key={item.id}>
        <Table>
          <h3>{item.name}</h3>
          <p>{item.title}</p>
          <span>{item.id}</span>
        </Table>
      </WorkItem>
    );
  });

  return (
    <WorkContainer>
      <h2>Works</h2>

      <StyledWork>{updated}</StyledWork>
    </WorkContainer>
  );
};

export default Work;

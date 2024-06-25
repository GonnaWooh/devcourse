import { useState } from "react";
import styled from "styled-components";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

function Tab({ children }: TabProps) {
  return <>{children}</>;
}
interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsStyle>
      <h1>Tabs</h1>
    </TabsStyle>
  );
}

const TabsStyle = styled.div``;

export default { Tab, Tabs };

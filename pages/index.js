import TabContent from "components/tabs/tabContent";
import TabHeader from "components/tabs/tabHeader";
import Tabs from "components/tabs/tabs";
export default function index() {
  return (
    <>
      <Tabs defaultKey="2">
        <TabHeader label="Component One" id="1" active></TabHeader>
        <TabHeader label="Component Two" id="2"></TabHeader>
        <TabContent label="Component One" id="1">
          <div style={{ padding: "15px" }}>
            <p>Component one</p>
          </div>
        </TabContent>
        <TabContent label="Component One" id="2">
          <p>Component two</p>
        </TabContent>
      </Tabs>
    </>
  );
}

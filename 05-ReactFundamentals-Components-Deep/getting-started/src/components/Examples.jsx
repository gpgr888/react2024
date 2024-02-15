
import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples (){
	const [selectedTopic, setSelectedTopic] = useState();

	let tabContent = <p>Please select a topic.</p>;


  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
	return (
    // as we have build sepereate Section component this below can be replaced
		<Section title="Examples" id="examples" className="">
    {/*now we dont set this h2 Like this instead we send it as props to component*/}
          {/*<h2>Examples</h2>*/}
    {/*you notice that when we look into the ui our css is broken before we had used 
    
      above id examples to write our css but now this id is not passed to the section componen
      so it should be passed as props to be used in section component
      it is also to be noted that in react in general is that when we set attributes to custom
      components those props are not automatically forwarded to jsx code
    */}
 {/*now similaray we can replace this onSelect directly with onClick as this will be passed as props*/}
            
         {/* <menu>
         <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}*/}
          <Tabs buttons={<>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>

          </>}
          >
          {tabContent}
          </Tabs>
          {/*similary as you can see this menu section we have TabButton and tabContent
            we could make this lean and clean by seperating into different component and 
            passing multiple slot for tabContent we have children prop in the component and
            for TabButton we can pass another slot buttons and assign these TabButton component as
            value which may look redentent but this is the crucial in comming days and perfectly fine
            in react
          */}
      </Section>


     )
}
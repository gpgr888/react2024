
import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";

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

          <menu>
          {/*now similaray we can replace this onSelect directly with onClick as this will be passed as props*/}
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
          {tabContent}
      </Section>


     )
}
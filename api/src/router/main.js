import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../view/Home'


import Overview from '../view/Overview'
import API_Basics from '../view/API_Basics'
import Rich_Styling from '../view/Rich_Styling'
import Entities from '../view/Entities'
import API_Migration from '../view/API_Migration'
import Decorators from '../view/Decorators'
import Key_Bindings from '../view/Key_Bindings'
import Managing_Focus from '../view/Managing_Focus'
import Block_Styling from '../view/Block_Styling'
import Custom_Block_Rendering from '../view/Custom_Block_Rendering'
import Custom_Block_Components from '../view/Custom_Block_Components'
import Complex_Inline_Styles from '../view/Complex_Inline_Styles'
import Nested_Lists from '../view/Nested_Lists'
import Text_Direction from '../view/Text_Direction'
import EditorState_Race_Conditions from '../view/EditorState_Race_Conditions'
import Issues_and_Pitfalls from '../view/Issues_and_Pitfalls'

import Editor_Component from '../view/Editor_Component'
import EditorChangeType from '../view/EditorChangeType'
import EditorState from '../view/EditorState'
import ContentState from '../view/ContentState'
import ContentBlock from '../view/ContentBlock'
import CharacterMetadata from '../view/CharacterMetadata'
import Entity from '../view/Entity'
import SelectionState from '../view/SelectionState'
import CompositeDecorator from '../view/CompositeDecorator'
import Data_Conversion from '../view/Data_Conversion'
import RichUtils from '../view/RichUtils'
import AtomicBlockUtils from '../view/AtomicBlockUtils'
import KeyBindingUtil from '../view/KeyBindingUtil'
import Modifier from '../view/Modifier'

const Main = () => (
  <div className="main-right">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Overview' component={Overview}/>
      <Route path='/API_Basics' component={API_Basics}/>
      <Route path='/Rich_Styling' component={Rich_Styling}/>
      <Route path='/Entities' component={Entities}/>
      <Route path='/API_Migration' component={API_Migration}/>
      <Route path='/Decorators' component={Decorators}/>
      <Route path='/Key_Bindings' component={Key_Bindings}/>
      <Route path='/Managing_Focus' component={Managing_Focus}/>
      <Route path='/Block_Styling' component={Block_Styling}/>
      <Route path='/Custom_Block_Rendering' component={Custom_Block_Rendering}/>
      <Route path='/Custom_Block_Components' component={Custom_Block_Components}/>
      <Route path='/Complex_Inline_Styles' component={Complex_Inline_Styles}/>
      <Route path='/Nested_Lists' component={Nested_Lists}/>
      <Route path='/Text_Direction' component={Text_Direction}/>
      <Route path='/EditorState_Race_Conditions' component={EditorState_Race_Conditions}/>
      <Route path='/Issues_and_Pitfalls' component={Issues_and_Pitfalls}/>

      <Route exact path='/Editor_Component' component={Editor_Component} />
      <Route exact path='/EditorChangeType' component={EditorChangeType} />
      <Route exact path='/EditorState' component={EditorState} />
      <Route exact path='/ContentState' component={ContentState} />
      <Route exact path='/ContentBlock' component={ContentBlock} />
      <Route exact path='/CharacterMetadata' component={CharacterMetadata} />
      <Route exact path='/Entity' component={Entity} />
      <Route exact path='/SelectionState' component={SelectionState} />
      <Route exact path='/CompositeDecorator' component={CompositeDecorator} />
      <Route exact path='/Data_Conversion' component={Data_Conversion} />
      <Route exact path='/RichUtils' component={RichUtils} />
      <Route exact path='/AtomicBlockUtils' component={AtomicBlockUtils} />
      <Route exact path='/KeyBindingUtil' component={KeyBindingUtil} />
      <Route exact path='/Modifier' component={Modifier} />
    </Switch>
  </div>
)
export default Main
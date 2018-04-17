import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>CompositeDecorator</h1><div><p>See the <a href="/docs/advanced-topics-decorators.html#compositedecorator">advanced topic article on Decorators</a>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-data-conversion.html#content">Next →</a></div></div>
`
---
title: 'Parallel Processing with Web Workers'
date: '2019-08-17'
---

## Section One

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, lacus at tincidunt tincidunt, felis nisi pretium magna, et consequat ex elit non `variable` risus. Nullam tincidunt leo lacus, ut pellentesque velit aliquam sed. Vivamus nec dictum ipsum, ac facilisis nibh. Quisque fermentum magna in imperdiet placerat. Aliquam vestibulum convallis quam, et luctus quam fermentum sed. Vestibulum at hendrerit dolor, a molestie urna.

### Subheading

Duis molestie dolor suscipit porttitor tempus. Sed suscipit lorem eu urna viverra, at varius neque commodo. Etiam eget nulla at quam dictum dictum ut non turpis. Suspendisse scelerisque metus ac lacinia efficitur. In sapien nulla, rhoncus ut rutrum porttitor, tempor porta lorem. In efficitur est sit amet sodales sodales.

### Subheading 2

Vivamus vel justo auctor est venenatis hendrerit consequat at massa. Aliquam semper aliquet viverra. Vivamus bibendum ipsum tristique ultricies volutpat. In vulputate eget ipsum gravida dictum.

```jsx
import React, { useState } from 'react';

// This is a comment
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <p>The counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </React.Fragment>
  );
};
```

## Section Two

### Level 3

Donec et metus aliquet, imperdiet lorem in, fringilla felis. Cras eu risus egestas, dapibus ipsum vel, venenatis erat. Aenean ultricies augue nec consequat luctus.

#### Level 4

Aenean ultricies orci a luctus cursus. Aenean eu lectus eu urna mattis lacinia eget sit amet nulla. Pellentesque convallis eros nec lorem vehicula molestie. Sed sed massa semper, porta risus et, commodo erat. Pellentesque eleifend, ligula vitae ornare dignissim, massa massa ullamcorper metus, eu auctor lacus felis in sapien. Cras malesuada bibendum arcu vitae pharetra.

##### Level 5

Nam fermentum nec dolor ac feugiat. Aenean pulvinar orci a ipsum aliquam, euismod bibendum ex vestibulum. In convallis non magna sit amet bibendum. Integer dictum lacus a eros mollis lacinia. Mauris porttitor libero a orci cursus, sollicitudin luctus libero sollicitudin. Donec diam augue, aliquet vel mauris et, tincidunt elementum libero.

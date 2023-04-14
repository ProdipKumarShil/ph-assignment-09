import React from 'react';

const Blogs = () => {
  
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <div className="border rounded-lg p-6 mb-4">
        <h1 className='text-3xl font-semibold mb-4 text-indigo-500'>When should you use context API?</h1>
        <p className='text-slate-500'>Even if only b changes ComponentA will re-render – for no reason, it will render the same content. This is called an extra or unnecessary re-render. For that reason, it is bad practice to have a single, huge state provided by a context</p>
      </div>
      <div className="border rounded-lg p-6 mb-4">
        <h1 className='text-3xl font-semibold mb-4 text-indigo-500'>What is a custom hook?</h1>
        <p className='text-slate-500'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
      </div>
      <div className="border rounded-lg p-6 mb-4">
        <h1 className='text-3xl font-semibold mb-4 text-indigo-500'>What is useMemo?</h1>
        <p className='text-slate-500'>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
      </div>
      <div className="border rounded-lg p-6 mb-4">
        <h1 className='text-3xl font-semibold mb-4 text-indigo-500'>What is useRef?</h1>
        <p className='text-slate-500'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
      </div>
    </div>
  );
};

export default Blogs;
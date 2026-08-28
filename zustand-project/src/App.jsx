import {useStoreSelectors} from "./store/store.js";

const Counter = () => {
    const count = useStoreSelectors.use.count();
    const increment = useStoreSelectors.use.increment();
    const decrement = useStoreSelectors.use.decrement();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
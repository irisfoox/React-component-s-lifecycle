# React-component-s-lifecycle
How to change a webpage's appearance by updating the component and unupdating by using lifecycle functions in react
componentDidMount() function is activated on loading the component
it counts 3 seconds & then changes the component text content by setTimeout()
getSnapshotBeforeUpdate(prevProps, prevState) is activated just before the update
it keeps info about the component's props & state
if we use this function then we must use the componentDidUpdate()
it keeps the info of the component after the update took place

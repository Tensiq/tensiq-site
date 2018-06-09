export function isConnected(comp) {
  return comp.WrappedComp != undefined
}

export function getConnected(child) {
  if (isConnected(child)) {
    return getConnected(child.WrappedComp)
  }
  return child
}

import { connect } from "react-redux";
import UnconnectedTree from "./tree";

const Tree = connect((state) => ({
  tree: state.tree,
  treeToo: state.treeToo,
  dateMinNumeric: state.controls.dateMinNumeric,
  dateMaxNumeric: state.controls.dateMaxNumeric,
  quickdraw: state.controls.quickdraw,
  colorBy: state.controls.colorBy,
  colorByConfidence: state.controls.colorByConfidence,
  layout: state.controls.layout,
  scatter: state.controls.scatter,
  temporalConfidence: state.controls.temporalConfidence,
  distanceMeasure: state.controls.distanceMeasure,
  mutType: state.controls.mutType,
  colorScale: state.controls.colorScale,
  metadata: state.metadata,
  showTreeToo: state.controls.showTreeToo,
  showTangle: state.controls.showTangle,
  panelsToDisplay: state.controls.panelsToDisplay,
  selectedBranchLabel: state.controls.selectedBranchLabel,
  narrativeMode: state.narrative.display
}))(UnconnectedTree);

export default Tree;

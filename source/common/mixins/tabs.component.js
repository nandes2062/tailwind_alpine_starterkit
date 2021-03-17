export default window.tabsComponent = function () {
  return {
		openTab: 1,
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}

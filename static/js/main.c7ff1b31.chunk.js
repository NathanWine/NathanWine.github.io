(this["webpackJsonpreact-my-website"]=this["webpackJsonpreact-my-website"]||[]).push([[0],[,,,,,,,,function(t){t.exports=JSON.parse('{"todoLists":[{"key":0,"name":"Things I am Never Gonna Do","owner":"Rick Astley","items":[{"key":0,"description":"Give You Up","due_date":"2019-09-30","assigned_to":"Rick","completed":true},{"key":1,"description":"Say Goodbye","due_date":"2019-10-15","assigned_to":"Rick","completed":false},{"key":2,"description":"Make You Cry","due_date":"2019-12-30","assigned_to":"Bob","completed":false}]},{"key":1,"name":"House Repairs","owner":"Bob Vila","items":[{"key":0,"description":"Repair Leaky Kitchen Sink","due_date":"2019-07-11","assigned_to":"Rick","completed":true},{"key":1,"description":"Fix Leak in Roof","due_date":"2019-10-15","assigned_to":"Jane","completed":false},{"key":2,"description":"Paint Interior","due_date":"2019-11-11","assigned_to":"Joe","completed":false},{"key":3,"description":"Plant Flowers","due_date":"2019-08-17","assigned_to":"Ryan","completed":true},{"key":4,"description":"Repair Front Door","due_date":"2019-10-31","assigned_to":"Glenda","completed":false}]},{"key":2,"name":"Courses to Take","owner":"Joe Student","items":[{"key":0,"description":"CSE 114","due_date":"2018-12-31","assigned_to":"Joe","completed":true},{"key":1,"description":"CSE 215","due_date":"2018-12-31","assigned_to":"Joe","completed":true},{"key":2,"description":"AMS 301","due_date":"2018-12-31","assigned_to":"Joe","completed":true},{"key":3,"description":"CSE 214","due_date":"2019-05-31","assigned_to":"Joe","completed":true},{"key":4,"description":"AMS 310","due_date":"2019-05-31","assigned_to":"Joe","completed":true},{"key":5,"description":"CSE 216","due_date":"2019-12-31","assigned_to":"Joe","completed":false},{"key":6,"description":"CSE 220","due_date":"2019-12-31","assigned_to":"Joe","completed":false},{"key":7,"description":"CSE 316","due_date":"2020-05-31","assigned_to":"Joe","completed":false},{"key":8,"description":"CSE 303","due_date":"2020-05-31","assigned_to":"Joe","completed":false},{"key":9,"description":"CSE 380","due_date":"2020-05-31","assigned_to":"Joe","completed":false},{"key":10,"description":"CSE 373","due_date":"2020-12-31","assigned_to":"Joe","completed":false},{"key":11,"description":"CSE 381","due_date":"2020-12-31","assigned_to":"Joe","completed":false},{"key":12,"description":"CSE 416","due_date":"2020-12-31","assigned_to":"Joe","completed":false}]}]}')},function(t,e,i){t.exports=i(17)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(0),n=i.n(s),a=i(7),o=i.n(a),r=(i(14),i(15),i(16),i(1)),c=i(2),d=i(4),l=i(3),m=i(5),p=i(8),u=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{id:"home_banner_container"},"@todo",n.a.createElement("br",null),"List Maker")}}]),e}(s.Component),h=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("h3",{id:"home_your_lists_heading"},"Your Lists")}}]),e}(s.Component),_=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("a",{className:"home_list_link",onClick:this.props.loadList.bind(this,this.props.todoList)},this.props.todoList.name,n.a.createElement("br",null))}}]),e}(s.Component),f=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{id:"home_your_lists_list"},this.props.todoLists.map((function(e){return n.a.createElement(_,{key:e.key,loadList:t.props.loadList,todoList:e})})))}}]),e}(s.Component),g=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{id:"todo_home"},n.a.createElement("div",{id:"home_your_lists_container"},n.a.createElement(h,null),n.a.createElement(f,{loadList:this.props.loadList,todoLists:this.props.todoLists})),n.a.createElement(u,null),n.a.createElement("div",{id:"home_new_list_container"},n.a.createElement("button",{onClick:this.props.createNewList,id:"home_new_list_button"},"Create a New To Do List")))}}]),e}(s.Component),y=function(t){function e(t,i,s){var n;return Object(r.a)(this,e),(n=Object(d.a)(this,Object(l.a)(e).call(this))).initList=t,n.futureList=i,n.callBack=s,n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"doTransaction",value:function(){this.callBack(this.futureList,this.initList.key)}},{key:"undoTransaction",value:function(){this.callBack(this.initList,this.initList.key)}},{key:"toString",value:function(){return"Go to "+this.futureList.name}}]),e}(function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"doTransaction",value:function(){console.log("WARNING, THIS METHOD SHOULD HAVE BEEN OVERRIDDEN")}},{key:"undoTransaction",value:function(){console.log("WARNING, THIS METHOD SHOULD HAVE BEEN OVERRIDDEN")}}]),t}()),b=function(t){function e(){var t,i;Object(r.a)(this,e);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(i=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={assigned_to:i.props.item.assigned_to,completed:i.props.item.completed,description:i.props.item.description,due_date:i.props.item.due_date,key:i.props.item.key},i.assignedToChange=function(t){i.setState({assigned_to:t.target.value})},i.completedChange=function(t){i.setState({completed:t.target.checked})},i.descriptionChange=function(t){i.setState({description:t.target.value})},i.dueDateChange=function(t){i.setState({due_date:t.target.value})},i.checkValidity=function(){var t=i.state.assigned_to,e=i.state.description;/^\s*$/.test(i.state.assigned_to)&&(t="Unknown"),/^\s*$/.test(i.state.description)&&(e="Unknown"),i.setState({assigned_to:t,description:e},(function(){this.submit()}))},i.submit=function(){var t,e=JSON.parse(JSON.stringify(i.props.list));-1!==i.props.item.key?((t=JSON.parse(JSON.stringify(i.props.item))).assigned_to=i.state.assigned_to,t.completed=i.state.completed,t.description=i.state.description,t.due_date=i.state.due_date,e.items[i.props.item.key]=t):(i.setState({key:i.props.list.items.length}),e.items.push(i.state));var s=new y(i.props.list,e,i.props.modifyList);window.tps.addTransaction(s)},i}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{id:"todo_item"},n.a.createElement("h1",null,n.a.createElement("b",null,"Item")),n.a.createElement("p",{className:"text_toolbar"},"Description:",n.a.createElement("input",{id:"item_description_textfield",className:"edit_item_textfield",type:"text",defaultValue:this.props.item.description,onChange:this.descriptionChange})),n.a.createElement("p",{className:"text_toolbar"},"Assigned To:",n.a.createElement("input",{id:"item_assigned_to_textfield",className:"edit_item_textfield",type:"text",defaultValue:this.props.item.assigned_to,onChange:this.assignedToChange})),n.a.createElement("p",{className:"text_toolbar"},"Due Date:",n.a.createElement("input",{id:"item_due_date_picker",className:"edit_item_textfield",type:"date",defaultValue:this.props.item.due_date,onChange:this.dueDateChange})),n.a.createElement("p",null,"Completed:",n.a.createElement("input",{id:"item_completed_checkbox",type:"checkbox",defaultChecked:this.props.item.completed,onChange:this.completedChange})),n.a.createElement("button",{onClick:this.checkValidity,id:"item_form_submit_button"},"Submit"),n.a.createElement("button",{onClick:this.props.loadList.bind(this,this.props.list),id:"item_form_cancel_button"},"Cancel"))}}]),e}(s.Component),v=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{id:"list_heading",onClick:this.props.goHome},"   @todo")}}]),e}(s.Component),k=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.moveItemUp,className:0!==this.props.index?"move_up_btn":"move_up_btn disabled"},"\u21e7")}}]),e}(s.Component),E=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.moveItemDown,className:this.props.index!==this.props.listSize-1?"move_down_btn":"disabled move_down_btn"},"\u21e9")}}]),e}(s.Component),O=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.removeItem,className:"remove_item_btn"},"\u2715")}}]),e}(s.Component),L=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t;return t=this.props.listItem.completed?n.a.createElement("div",{className:"list_item_card_completed"},"Completed"):n.a.createElement("div",{className:"list_item_card_not_completed"},"Pending"),n.a.createElement("div",{onClick:this.props.editItem.bind(this,this.props.listItem),className:"list_item_card"},n.a.createElement("div",{className:"list_item_card_description"},this.props.listItem.description),n.a.createElement("div",{className:"list_item_card_assigned_to"},"Assigned To: ",n.a.createElement("strong",null,this.props.listItem.assigned_to)),n.a.createElement("div",{className:"list_item_card_due_date"},this.props.listItem.due_date),n.a.createElement("div",{className:"list_item_card_completed"},t),n.a.createElement(k,{moveItemUp:this.props.moveItemUp.bind(this,this.props.index),index:this.props.index}),n.a.createElement(E,{moveItemDown:this.props.moveItemDown.bind(this,this.props.index),index:this.props.index,listSize:this.props.listSize}),n.a.createElement(O,{removeItem:this.props.removeItem.bind(this,this.props.index)}))}}]),e}(s.Component),C=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.addItem,className:"list_item_add_card"},"+")}}]),e}(s.Component),S=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{id:"list_items_container",className:"list_item_header_card"},n.a.createElement("div",{className:"list_item_header_card"}),n.a.createElement("div",{onClick:this.props.sortItemsByTask,className:"list_item_task_header"},"Task"),n.a.createElement("div",{onClick:this.props.sortItemsByDueDate,className:"list_item_due_date_header"},"Due Date"),n.a.createElement("div",{onClick:this.props.sortItemsByStatus,className:"list_item_status_header"},"Status"),n.a.createElement("div",{className:"list_items_container"},this.props.todoList.items.map((function(e,i){return n.a.createElement(L,{editItem:t.props.editItem,key:e.key,index:i,listItem:e,moveItemUp:t.props.moveItemUp,moveItemDown:t.props.moveItemDown,removeItem:t.props.removeItem,listSize:t.props.todoList.items.length})})),n.a.createElement(C,{addItem:this.props.addItem})))}}]),e}(s.Component),I=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.toggleDialog,id:"list_trash"},"\ud83d\uddd1")}}]),e}(s.Component),j=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.visible?"modal is_visible":"modal",id:"modal_yes_no_dialog","data-animation":"slideInOutLeft"},n.a.createElement("div",{className:"modal_dialog"},n.a.createElement("header",{className:"dialog_header"},"Delete list?"),n.a.createElement("section",{className:"dialog_content"},n.a.createElement("p",null,n.a.createElement("strong",null,"Are you sure you want to delete this list?"))),n.a.createElement("button",{onClick:this.props.deleteList,id:"dialog_yes_button"},"Yes"),n.a.createElement("button",{onClick:this.props.toggleDialog,id:"dialog_no_button"},"No"),n.a.createElement("footer",{className:"dialog_footer"},"The list will not be retreivable.")))}}]),e}(s.Component),T=function(){function t(){Object(r.a)(this,t),this.transactions=[],this.mostRecentTransaction=-1,this.performingDo=!1,this.performingUndo=!1}return Object(c.a)(t,[{key:"isPerformingDo",value:function(){return this.performingDo}},{key:"isPerformingUndo",value:function(){return this.performingUndo}},{key:"addTransaction",value:function(t){if(this.mostRecentTransaction<0||this.mostRecentTransaction<this.transactions.length-1)for(var e=this.transactions.length-1;e>this.mostRecentTransaction;e--)this.transactions.pop();this.transactions.push(t),this.doTransaction()}},{key:"doTransaction",value:function(){this.hasTransactionToRedo()&&(this.performingDo=!0,this.transactions[this.mostRecentTransaction+1].doTransaction(),this.mostRecentTransaction++,this.performingDo=!1)}},{key:"peekUndo",value:function(){return this.hasTransactionToUndo()?this.transactions[this.mostRecentTransaction]:null}},{key:"peekDo",value:function(){return this.hasTransactionToRedo()?this.transactions[this.mostRecentTransaction+1]:null}},{key:"undoTransaction",value:function(){this.hasTransactionToUndo()&&(this.performingUndo=!0,this.transactions[this.mostRecentTransaction].undoTransaction(),this.mostRecentTransaction--,this.performingUndo=!1)}},{key:"clearAllTransactions",value:function(){this.transactions=[],this.mostRecentTransaction=-1}},{key:"getSize",value:function(){return this.transactions.length}},{key:"getRedoSize",value:function(){return this.getSize()-this.mostRecentTransaction-1}},{key:"getUndoSize",value:function(){return this.mostRecentTransaction+1}},{key:"hasTransactionToUndo",value:function(){return this.mostRecentTransaction>=0}},{key:"hasTransactionToRedo",value:function(){return this.mostRecentTransaction<this.transactions.length-1}},{key:"toString",value:function(){var t="--Number of Transactions: "+this.getSize()+"\n";t+="--Current Index on Stack: "+this.mostRecentTransaction+"\n",t+="--Current Transaction Stack:\n";for(var e=0;e<=this.mostRecentTransaction;e++){t+="----"+this.transactions[e].toString()+"\n"}return t}}]),t}();window.tps=new T;var N="None",w=function(t){function e(){var t,i;Object(r.a)(this,e);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(i=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={showingDialog:!1},i.onOwnerTextChange=function(t){i.setListOwner(t.target.value)},i.onNameTextChange=function(t){i.setListName(t.target.value)},i.toggleDialog=function(){i.setState({showingDialog:!i.state.showingDialog})},i.onDeleteList=function(){i.toggleDialog(),i.props.deleteList(i.props.todoList.key),i.props.goHome()},i.moveItemUp=function(t,e){e.stopPropagation(),t>0&&i.swapItems(parseInt(t),parseInt(t-1))},i.moveItemDown=function(t,e){e.stopPropagation(),t!==i.props.todoList.items.length-1&&i.swapItems(parseInt(t),parseInt(t+1))},i.removeItem=function(t,e){e.stopPropagation();var s=JSON.parse(JSON.stringify(i.props.todoList));s.items.splice(t,1);var n=new y(i.props.todoList,s,i.props.modifyList);window.tps.addTransaction(n)},i.addItem=function(){i.props.changeItem({key:-1,description:"",due_date:"No Date Set",assigned_to:"",completed:!1})},i.editItem=function(t){i.props.changeItem(t)},i.sortTasks=function(t){N=t;var e=JSON.parse(JSON.stringify(i.props.todoList));e.items.sort(i.compare);var s=new y(i.props.todoList,e,i.props.modifyList);window.tps.addTransaction(s)},i.isCurrentItemSortCriteria=function(t){return N===t},i.sortItemsByTask=function(){i.isCurrentItemSortCriteria(D)?i.sortTasks(R):i.sortTasks(D)},i.sortItemsByStatus=function(){i.isCurrentItemSortCriteria(U)?i.sortTasks(H):i.sortTasks(U)},i.sortItemsByDueDate=function(){i.isCurrentItemSortCriteria(x)?i.sortTasks(J):i.sortTasks(x)},i.compare=function(t,e){if(i.isCurrentItemSortCriteria(R)||i.isCurrentItemSortCriteria(H)||i.isCurrentItemSortCriteria(J)){var s=t;t=e,e=s}return i.isCurrentItemSortCriteria(D)||i.isCurrentItemSortCriteria(R)?t.description<e.description?-1:t.description>e.description?1:0:i.isCurrentItemSortCriteria(x)||i.isCurrentItemSortCriteria(J)?t.due_date<e.due_date?-1:t.due_date>e.due_date?1:0:t.completed<e.completed?-1:t.completed>e.completed?1:0},i.goHome=function(){/^\s*$/.test(i.getListName())?alert("Please enter a non-empty name for the todolist"):i.props.goHome()},i}return Object(m.a)(e,t),Object(c.a)(e,[{key:"getListName",value:function(){return this.props.todoList?this.props.todoList.name:""}},{key:"getListOwner",value:function(){if(this.props.todoList)return this.props.todoList.owner}},{key:"setListOwner",value:function(t){if(this.props.todoList){var e=JSON.parse(JSON.stringify(this.props.todoList));e.owner=t;var i=new y(this.props.todoList,e,this.props.modifyList);window.tps.addTransaction(i)}}},{key:"setListName",value:function(t){if(this.props.todoList){var e=JSON.parse(JSON.stringify(this.props.todoList));e.name=t;var i=new y(this.props.todoList,e,this.props.modifyList);window.tps.addTransaction(i)}}},{key:"swapItems",value:function(t,e){var i=JSON.parse(JSON.stringify(this.props.todoList)),s=i.items,n=s[t];s[t]=s[e],s[e]=n;var a=new y(this.props.todoList,i,this.props.modifyList);window.tps.addTransaction(a)}},{key:"componentDidMount",value:function(){document.onkeydown=function(t){"todo_list"===document.getElementById("root").firstElementChild.id&&(t.ctrlKey&&90===t.keyCode?(t.preventDefault(),window.tps.undoTransaction()):t.ctrlKey&&89===t.keyCode&&(t.preventDefault(),window.tps.doTransaction()))}}},{key:"render",value:function(){return n.a.createElement("div",{id:"todo_list"},n.a.createElement(v,{goHome:this.goHome}),n.a.createElement(I,{toggleDialog:this.toggleDialog}),n.a.createElement("div",{id:"list_details_container"},n.a.createElement("div",{id:"list_details_name_container",className:"text_toolbar"},n.a.createElement("span",{id:"list_name_prompt"},"Name:"),n.a.createElement("input",{value:this.getListName(),type:"text",id:"list_name_textfield",onChange:this.onNameTextChange})),n.a.createElement("div",{id:"list_details_owner_container",className:"text_toolbar"},n.a.createElement("span",{id:"list_owner_prompt"},"Owner:"),n.a.createElement("input",{value:this.getListOwner(),type:"text",id:"list_owner_textfield",onChange:this.onOwnerTextChange}))),n.a.createElement(S,{todoList:this.props.todoList,loadList:this.props.loadList,editItem:this.editItem,moveItemUp:this.moveItemUp,moveItemDown:this.moveItemDown,removeItem:this.removeItem,sortItemsByTask:this.sortItemsByTask,sortItemsByDueDate:this.sortItemsByDueDate,sortItemsByStatus:this.sortItemsByStatus,addItem:this.addItem}),n.a.createElement(j,{toggleDialog:this.toggleDialog,visible:this.state.showingDialog,deleteList:this.onDeleteList}))}}]),e}(s.Component),D="sort_by_task_increasing",R="sort_by_task_decreasing",x="sort_by_due_date_increasing",J="sort_by_due_date_decreasing",U="sort_by_status_increasing",H="sort_by_status_decreasing",B=w,M={HOME_SCREEN:"HOME_SCREEN",LIST_SCREEN:"LIST_SCREEN",ITEM_SCREEN:"ITEM_SCREEN"},A=function(t){function e(){var t,i;Object(r.a)(this,e);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(i=Object(d.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(n)))).state={currentScreen:M.HOME_SCREEN,todoLists:p.todoLists,currentList:null,currentItem:null},i.modifyList=function(t,e){var s=i.state.todoLists.slice();s[e]=t,i.setState({todoLists:s}),i.loadList(t)},i.goHome=function(){window.tps.clearAllTransactions(),i.setState({currentScreen:M.HOME_SCREEN}),i.setState({currentList:null})},i.loadList=function(t){i.setState({currentScreen:M.LIST_SCREEN}),i.setState({currentList:t}),i.updateKeys(t)},i.createNewList=function(){var t={key:i.state.todoLists.length,name:"Unknown",owner:"Unknown",items:[]};i.state.todoLists.push(t),i.loadList(t)},i.deleteList=function(t){if(t>=0&&t<i.state.todoLists.length){var e=i.state.todoLists.slice();e.splice(t,1);for(var s=0;s<e.length;s++)e[s].key=s;i.setState({todoLists:e})}},i.changeItem=function(t){i.setState({currentItem:t}),i.goItem()},i.goItem=function(){i.setState({currentScreen:M.ITEM_SCREEN})},i}return Object(m.a)(e,t),Object(c.a)(e,[{key:"updateKeys",value:function(t){if(null!==t){for(var e=t,i=0;i<e.items.length;i++)e.items[i].key=i;this.setState({currentList:e})}}},{key:"render",value:function(){switch(this.state.currentScreen){case M.HOME_SCREEN:return n.a.createElement(g,{loadList:this.loadList.bind(this),todoLists:this.state.todoLists,createNewList:this.createNewList});case M.LIST_SCREEN:return n.a.createElement(B,{goHome:this.goHome.bind(this),todoList:this.state.currentList,loadList:this.loadList,deleteList:this.deleteList,changeItem:this.changeItem,modifyList:this.modifyList});case M.ITEM_SCREEN:return n.a.createElement(b,{item:this.state.currentItem,list:this.state.currentList,loadList:this.loadList,modifyList:this.modifyList});default:return n.a.createElement("div",null,"ERROR")}}}]),e}(s.Component);o.a.render(n.a.createElement(A,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c7ff1b31.chunk.js.map
/*
//
/// Clank Dynamic List Height
/// version 0.1 */

(function(){ 'use strict';
  
  angular.module('clankDynamicListHeight', [])
    .directive('clankDynamicListHeight', ['$window', function($window){
      return{
        restrict:'A',
        link:function(scope, elem, attrs){
          
                    
          /*
          //
          /// Variable declarations */
          
          /// @todo - rename from vars to clank
          var vars = {
            'breakpoint':0,
            'total_height':0,
            'items':elem.children(),
            'style_tag':angular.element(document.createElement('style')),
            'opened_class':(attrs.clankDynamicListHeight === '') ? 'opened':attrs.clankDynamicListHeight,
            'elem_opened_class_name':elem[0].className + '.opened',
            'style_class_name':elem[0].className + '_style',
            'html_output':'',
            'style_exists':false
          };          
         
          
          /// Create the selector name for when the list is open
          vars.elem_opened_class_name = elem[0].className + '.' + vars.opened_class;
          
                    
          /// Check if there is a breakpoint set for this feature
          /// @todo - test if "undefined" works with the quotes
          if(typeof attrs.dynamicHeightBp !== 'undefined') vars.breakpoint = attrs.dynamicHeightBp;          
          
          
          
          /*
          //
          /// Functions */
          
          function Create_Style(vars){
                  
            /// 1. check window width and only run if under breakpoint (may want to change the name)
            if(vars.breakpoint === 0 || $window.innerWidth <= vars.breakpoint){
                                            
              /// 2. check if the children exists
              if(vars.items.length < 1) return; 
              
              /// 3. tally up the total height of the children
              vars.total_height = 0; /// reset the height so it won't stack when rebuilt 
              
              vars.items.each(function(e){            
                vars.total_height += angular.element(this).outerHeight(true);                        
              });
              
    
              /// 4. create a <style> with the max-height of the element in it                      
              vars.style_tag[0].className = vars.style_class_name; /// get the dynamic height elements class name
              
              vars.html_output = '.'+ vars.elem_opened_class_name +' { max-height:'+ vars.total_height +'px }'; /// create the inner-html for the style
              
              vars.style_tag.html(vars.html_output); /// apply the innter html
              
              elem[0].parentNode.insertBefore(vars.style_tag[0], elem[0]); /// inject the style tag into the DOM      
              
              vars.style_exists = true; /// let the directive know that the style now exists                                                      
            }                    
          }
          
          function Window_Resize_Handler($window, vars){
            
            angular.element($window).on('resize', function(e){            
              if(vars.breakpoint === 0) return; /// do not update if there is no breakpoint set
              
              var window_width = this.innerWidth; /// get the new width of the window
              
              /// if you have moved outside of the functionality zone, remove style
              if(window_width > vars.breakpoint && vars.style_exists === true){
                
                angular.element('.' + vars.style_class_name).remove(); /// remove the style
                
                vars.style_exists = false; /// let the directive know the style does not exist
              }
              
              else if(window_width <= vars.breakpoint && vars.style_exists === false){
                Create_Style(vars);
              }
            });
          }
          
          
          
          /*
          //
          /// Run */
          
          Create_Style(vars);
          Window_Resize_Handler($window, vars);                    
        }
      };
    }]);    
})();
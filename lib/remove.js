exports.remove = function(data, str) {

  var data_array = data.split('\n');
  var regex = new RegExp('^\\w+\\s('+str+')', 'gi');

  lastIndex = function(){
      for (var i = 0; i < data_array.length; i++)
        if (data_array[i].match(regex))
          return i;
  }();

  data_array.splice(lastIndex, 1);
  return data_array.join('\n');
};

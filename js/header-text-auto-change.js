var example = ['teams', 'products', 'workflows', 'skills', 'processes'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("header-span").innerHTML = example[i];
                    textSequence(++i);
                }, 2500); 

            } else if (example.length == i) {
                textSequence(0);
            }

        }
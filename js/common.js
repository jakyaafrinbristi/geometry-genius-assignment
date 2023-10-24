function displayDataGeo(nameOfGeometry,resultCalculate){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    
    
    tr.innerHTML=`
    <td>${serial}.${nameOfGeometry} </td>
    <td>${resultCalculate}cm<sup>2</sup></td>
        
    <button class="bg-blue-600 px-4 py-2 rounded-lg font-medium text-white">Convert to m<sup>2<sup></button>
    </td>
    `;
    container.appendChild(tr);
    }
    
    function geometryGetData(id1,id2,id3){
        const geometryName=document.getElementById(id1).innerText;
        const geometryFirstInput=document.getElementById(id2).innerText;
        const geometrySecondInput=document.getElementById(id3).innerText;
        const gd ={
            geometryName:geometryName,
            geometryFirstInput:geometryFirstInput,
            geometrySecondInput:geometrySecondInput,
        };
        return gd;
    }
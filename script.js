// Mileage guide distances
const apiKey = 'AIzaSyDuASq7JMty9qifQg4rHj64RDZmk8v9gjk';

const mileageGuide = {
    "Westbrook Dormitory": {
        "Westbrook Dormitory": "n/a",
        "Madison Office": 10,
        "Transition Apts": 15,
        "Clinton House": 6,
        "Canterbury Commons": 5,
        "Seaside House": 1,
        "Lafayette Green": 4,
        "Founders Village": 4,
        "49 & 51 Magna Lane": 1,
        "28 & 31 Maple Ridge": 1,
        "Maplewood": 8,
        "Settlers Landing": 2
    },
    "Madison Office": {
        "Westbrook Dormitory": 10,
        "Madison Office": "n/a",
        "Transition Apts": 7,
        "Clinton House": 5,
        "Canterbury Commons": 11,
        "Seaside House": 10,
        "Lafayette Green": 6,
        "Founders Village": 7,
        "49 & 51 Magna Lane": 10,
        "28 & 31 Maple Ridge": 10,
        "Maplewood": 6,
        "Settlers Landing": 12
    },
    "Transition Apts": {
        "Westbrook Dormitory": 15,
        "Madison Office": 7,
        "Transition Apts": "n/a",
        "Clinton House": 10,
        "Canterbury Commons": 11,
        "Seaside House": 15,
        "Lafayette Green": 10,
        "Founders Village": 11,
        "49 & 51 Magna Lane": 15,
        "28 & 31 Maple Ridge": 15,
        "Maplewood": 11,
        "Settlers Landing": 16
    },
    "Clinton House": {
        "Westbrook Dormitory": 6,
        "Madison Office": 5,
        "Transition Apts": 10,
        "Clinton House": "n/a",
        "Canterbury Commons": 1,
        "Seaside House": 5,
        "Lafayette Green": 1,
        "Founders Village": 1,
        "49 & 51 Magna Lane": 4,
        "28 & 31 Maple Ridge": 5,
        "Maplewood": 1,
        "Settlers Landing": 8
    },
    "Canterbury Commons": {
        "Westbrook Dormitory": 5,
        "Madison Office": 11,
        "Transition Apts": 11,
        "Clinton House": 1,
        "Canterbury Commons": "n/a",
        "Seaside House": 4,
        "Lafayette Green": 1,
        "Founders Village": 2,
        "49 & 51 Magna Lane": 4,
        "28 & 31 Maple Ridge": 5,
        "Maplewood": 6,
        "Settlers Landing": 3
    },
    "Seaside House": {
        "Westbrook Dormitory": 1,
        "Madison Office": 10,
        "Transition Apts": 15,
        "Clinton House": 5,
        "Canterbury Commons": 4,
        "Seaside House": "n/a",
        "Lafayette Green": 4,
        "Founders Village": 4,
        "49 & 51 Magna Lane": 1,
        "28 & 31 Maple Ridge": 1,
        "Maplewood": 5,
        "Settlers Landing": 3
    },
    "Lafayette Green": {
        "Westbrook Dormitory": 4,
        "Madison Office": 6,
        "Transition Apts": 10,
        "Clinton House": 1,
        "Canterbury Commons": 1,
        "Seaside House": 4,
        "Lafayette Green": "n/a",
        "Founders Village": 1,
        "49 & 51 Magna Lane": 2,
        "28 & 31 Maple Ridge": 5,
        "Maplewood": 2,
        "Settlers Landing": 6
    },
    "Founders Village": {
        "Westbrook Dormitory": 4,
        "Madison Office": 7,
        "Transition Apts": 11,
        "Clinton House": 1,
        "Canterbury Commons": 2,
        "Seaside House": 4,
        "Lafayette Green": 1,
        "Founders Village": "n/a",
        "49 & 51 Magna Lane": 4,
        "28 & 31 Maple Ridge": 5,
        "Maplewood": 6,
        "Settlers Landing": 7
    },
    "49 & 51 Magna Lane": {
        "Westbrook Dormitory": 1,
        "Madison Office": 10,
        "Transition Apts": 15,
        "Clinton House": 4,
        "Canterbury Commons": 4,
        "Seaside House": 1,
        "Lafayette Green": 2,
        "Founders Village": 4,
        "49 & 51 Magna Lane": "n/a",
        "28 & 31 Maple Ridge": 1,
        "Maplewood": 8,
        "Settlers Landing": 2
    },
    "28 & 31 Maple Ridge": {
        "Westbrook Dormitory": 1,
        "Madison Office": 10,
        "Transition Apts": 15,
        "Clinton House": 5,
        "Canterbury Commons": 5,
        "Seaside House": 1,
        "Lafayette Green": 5,
        "Founders Village": 5,
        "49 & 51 Magna Lane": 1,
        "28 & 31 Maple Ridge": "n/a",
        "Maplewood": "n/a",
        "Settlers Landing": 1
    },
    "Maplewood": {
        "Westbrook Dormitory": 8,
        "Madison Office": 6,
        "Transition Apts": 11,
        "Clinton House": 1,
        "Canterbury Commons": 6,
        "Seaside House": 5,
        "Lafayette Green": 2,
        "Founders Village": 6,
        "49 & 51 Magna Lane": 8,
        "28 & 31 Maple Ridge": "n/a",
        "Maplewood": "n/a",
        "Settlers Landing": 9
    },
    "Settlers Landing": {
        "Westbrook Dormitory": 2,
        "Madison Office": 12,
        "Transition Apts": 16,
        "Clinton House": 8,
        "Canterbury Commons": 3,
        "Seaside House": 3,
        "Lafayette Green": 6,
        "Founders Village": 7,
        "49 & 51 Magna Lane": 2,
        "28 & 31 Maple Ridge": 1,
        "Maplewood": 9,
        "Settlers Landing": "n/a"
    }
};

// Object that stores names and their corresponding codes
const nameCodes = {
    "Bradford, K.": "201 Eng OR - DDS IHS",
    "Cassella, K.": "201 Eng OR - DDS IHS",
    "Keller, Y.": "201 Eng OR - DDS IHS",
    "Hart, A.": "201 Eng OR - DDS IHS",
    "Magee, C.": "201 Eng OR - DDS IHS",
    "Scherr, A.": "200 Eng OR - Private Pay",
    "N/A": "150 Discover - Private Pay"
};

function populateCode() {
    const selectedName = document.getElementById('Name').value;
    const govCodeInput = document.getElementById('govCode');
    govCodeInput.value = nameCodes[selectedName] || '';
}

// Toggle custom origin field visibility
function toggleCustomOrigin() {
    const originSelect = document.getElementById('origin');
    const customOriginInput = document.getElementById('customOrigin');
    customOriginInput.style.display = (originSelect.value === 'Custom') ? 'block' : 'none';
}

// Toggle custom destination field visibility
function toggleCustomDestination() {
    const destinationSelect = document.getElementById('destination');
    const customDestinationInput = document.getElementById('customDestination');
    customDestinationInput.style.display = (destinationSelect.value === 'Custom') ? 'block' : 'none';
}

// Initialize Google Maps Autocomplete for custom addresses
function initializeAutocomplete() {
    const customOriginInput = document.getElementById('customOrigin');
    const customDestinationInput = document.getElementById('customDestination');
    
    new google.maps.places.Autocomplete(customOriginInput);
    new google.maps.places.Autocomplete(customDestinationInput);
}

// Call initializeAutocomplete when the window loads
window.onload = initializeAutocomplete;

// Combined function to calculate distance and export to Excel
function calculateAndExportToExcel() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const customOrigin = document.getElementById('customOrigin').value;
    const customDestination = document.getElementById('customDestination').value;

    let originAddress = origin === 'Custom' ? customOrigin : origin;
    let destinationAddress = destination === 'Custom' ? customDestination : destination;

    // Check if both origin and destination are predefined
    if (origin !== 'Custom' && destination !== 'Custom') {
        const predefinedDistance = mileageGuide[origin]?.[destination];
        if (predefinedDistance) {
            document.getElementById('result').innerText = `Predefined Distance: ${predefinedDistance} miles`;
            exportToExcel(predefinedDistance);
        } else {
            document.getElementById('result').innerText = "Distance not available for this route.";
        }
    }
    // Use Google Maps API if either origin or destination is custom
    else if (originAddress && destinationAddress) {
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [originAddress],
                destinations: [destinationAddress],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.IMPERIAL,
            },
            function(response, status) {
                if (status === 'OK') {
                    const distance = response.rows[0].elements[0].distance.text;
                    document.getElementById('result').innerText = `Calculated Distance: ${distance}`;
                    exportToExcel(distance);
                } else {
                    document.getElementById('result').innerText = "Distance could not be calculated.";
                }
            }
        );
    } else {
        document.getElementById('result').innerText = "Please enter both origin and destination.";
    }
}

// Function to export the data to an Excel file
function exportToExcel(distance) {
    // Get the form values
    const name = document.getElementById('Name').value;
    const origin = document.getElementById('origin').value === 'Custom' ? document.getElementById('customOrigin').value : document.getElementById('origin').value;
    const destination = document.getElementById('destination').value === 'Custom' ? document.getElementById('customDestination').value : document.getElementById('destination').value;
    const govCode = document.getElementById('govCode').value;

    // Format the data to match the Excel layout
    const data = [
        ["Date", "Name", "Origin", "Destination", "Government Code", "Miles"],
        [new Date().toLocaleDateString(), name, origin, destination, govCode, distance]
    ];

    // Create a new workbook and add the data
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mileage Data");

    // Trigger download of Excel file
    XLSX.writeFile(wb, "Mileage_Reimbursement.xlsx");
}


// Model 
const drivers = [
    // Drivers data
    {"licenseId": "123456789", "type": "บุคคลทั่วไป", "birthdate": "01/01/1980", "status": "ปกติ"},
    {"licenseId": "987654321", "type": "มือใหม่", "birthdate": "15/05/1995", "status": "ปกติ"},
    {"licenseId": "456789123", "type": "คนขับรถสาธารณะ", "birthdate": "30/10/1975", "status": "ปกติ"},
    {"licenseId": "111222333", "type": "บุคคลทั่วไป", "birthdate": "20/07/1950", "status": "หมดอายุ"},
    {"licenseId": "555666777", "type": "มือใหม่", "birthdate": "05/03/2005", "status": "ถูกระงับ"},
    {"licenseId": "999888777", "type": "คนขับรถสาธารณะ", "birthdate": "12/12/1960", "status": "หมดอายุ"},
    {"licenseId": "222333444", "type": "บุคคลทั่วไป", "birthdate": "25/08/1990", "status": "ปกติ"},
    {"licenseId": "777888999", "type": "มือใหม่", "birthdate": "14/02/2000", "status": "ปกติ"},
    {"licenseId": "666555444", "type": "คนขับรถสาธารณะ", "birthdate": "07/06/1985", "status": "ปกติ"},
    {"licenseId": "444555666", "type": "บุคคลทั่วไป", "birthdate": "30/09/1945", "status": "หมดอายุ"},
    {"licenseId": "112233445", "type": "บุคคลทั่วไป", "birthdate": "11/04/1985", "status": "ปกติ"},
    {"licenseId": "667788990", "type": "มือใหม่", "birthdate": "09/08/1999", "status": "ปกติ"},
    {"licenseId": "554433221", "type": "คนขับรถสาธารณะ", "birthdate": "22/11/1965", "status": "หมดอายุ"},
    {"licenseId": "998877665", "type": "บุคคลทั่วไป", "birthdate": "17/05/1972", "status": "ปกติ"},
    {"licenseId": "334455667", "type": "มือใหม่", "birthdate": "03/12/2003", "status": "ถูกระงับ"},
    {"licenseId": "110099887", "type": "คนขับรถสาธารณะ", "birthdate": "26/07/1978", "status": "ปกติ"},
    {"licenseId": "889977665", "type": "บุคคลทั่วไป", "birthdate": "19/02/1995", "status": "ปกติ"},
    {"licenseId": "223344556", "type": "มือใหม่", "birthdate": "02/06/2001", "status": "ปกติ"},
    {"licenseId": "775566443", "type": "คนขับรถสาธารณะ", "birthdate": "30/01/1982", "status": "ปกติ"},
    {"licenseId": "112244669", "type": "บุคคลทั่วไป", "birthdate": "05/09/1960", "status": "หมดอายุ"},
    {"licenseId": "556677889", "type": "บุคคลทั่วไป", "birthdate": "15/07/1988", "status": "ถูกระงับ"},
    {"licenseId": "223366441", "type": "มือใหม่", "birthdate": "24/03/2000", "status": "ปกติ"},
    {"licenseId": "889900221", "type": "คนขับรถสาธารณะ", "birthdate": "06/12/1971", "status": "ปกติ"},
    {"licenseId": "998855662", "type": "บุคคลทั่วไป", "birthdate": "10/11/1992", "status": "ปกติ"},
    {"licenseId": "556644332", "type": "มือใหม่", "birthdate": "27/04/2004", "status": "ถูกระงับ"},
    {"licenseId": "221133445", "type": "คนขับรถสาธารณะ", "birthdate": "14/05/1969", "status": "หมดอายุ"},
    {"licenseId": "990011223", "type": "บุคคลทั่วไป", "birthdate": "29/06/1981", "status": "ปกติ"},
    {"licenseId": "445566778", "type": "มือใหม่", "birthdate": "16/01/2002", "status": "ปกติ"},
    {"licenseId": "334455660", "type": "คนขับรถสาธารณะ", "birthdate": "07/08/1983", "status": "ปกติ"},
    {"licenseId": "778899001", "type": "บุคคลทั่วไป", "birthdate": "12/10/1955", "status": "หมดอายุ"},
    {"licenseId": "998877666", "type": "บุคคลทั่วไป", "birthdate": "18/07/1980", "status": "ถูกระงับ"},
    {"licenseId": "554433222", "type": "มือใหม่", "birthdate": "23/09/1998", "status": "ถูกระงับ"},
    {"licenseId": "112233441", "type": "คนขับรถสาธารณะ", "birthdate": "20/02/1973", "status": "ปกติ"},
    {"licenseId": "667788999", "type": "บุคคลทั่วไป", "birthdate": "05/06/1965", "status": "หมดอายุ"},
    {"licenseId": "334455666", "type": "มือใหม่", "birthdate": "11/12/2003", "status": "ถูกระงับ"},
    {"licenseId": "110099888", "type": "คนขับรถสาธารณะ", "birthdate": "26/07/1968", "status": "หมดอายุ"},
    {"licenseId": "889977666", "type": "บุคคลทั่วไป", "birthdate": "02/04/1994", "status": "ปกติ"},
    {"licenseId": "223344555", "type": "มือใหม่", "birthdate": "07/09/2001", "status": "ปกติ"},
    {"licenseId": "775566444", "type": "คนขับรถสาธารณะ", "birthdate": "13/03/1985", "status": "ปกติ"},
    {"licenseId": "112244668", "type": "บุคคลทั่วไป", "birthdate": "28/08/1950", "status": "ถูกระงับ"},
    {"licenseId": "334455889", "type": "บุคคลทั่วไป", "birthdate": "10/10/1987", "status": "ปกติ"},
    {"licenseId": "225577449", "type": "มือใหม่", "birthdate": "20/11/1996", "status": "ปกติ"},
    {"licenseId": "998877112", "type": "คนขับรถสาธารณะ", "birthdate": "15/02/1979", "status": "ปกติ"},
    {"licenseId": "112233778", "type": "บุคคลทั่วไป", "birthdate": "25/05/1951", "status": "หมดอายุ"},
    {"licenseId": "556699332", "type": "มือใหม่", "birthdate": "07/04/2005", "status": "ถูกระงับ"},
    {"licenseId": "443322110", "type": "คนขับรถสาธารณะ", "birthdate": "03/09/1962", "status": "หมดอายุ"},
    {"licenseId": "778899221", "type": "บุคคลทั่วไป", "birthdate": "19/07/1991", "status": "ปกติ"},
    {"licenseId": "665544113", "type": "มือใหม่", "birthdate": "11/01/2000", "status": "ปกติ"},
    {"licenseId": "332211554", "type": "คนขับรถสาธารณะ", "birthdate": "04/06/1984", "status": "ปกติ"},
    {"licenseId": "990011882", "type": "บุคคลทั่วไป", "birthdate": "28/12/1948", "status": "ถูกระงับ"}
];



// Controller
document.getElementById("licenseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    checkLicense(event);
});

function checkLicense(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าซ้ำ
    const licenseId = document.getElementById("licenseId").value;
    const errorMessage = document.getElementById("error-message");

    // ตรวจสอบหมายเลขใบขับขี่
    if (!/^[1-9][0-9]{8}$/.test(licenseId)) {
        errorMessage.textContent = "หมายเลขใบขับขี่ไม่ถูกต้อง";
        return;
    }

    // ค้นหาข้อมูลผู้ขับขี่
    const driver = drivers.find(d => d.licenseId === licenseId);
    if (!driver) {
        errorMessage.textContent = "ไม่พบข้อมูลผู้ขับขี่";
        return;
    }

    // ตรวจสอบเงื่อนไขตามประเภทผู้ขับขี่
    const age = calculateAge(driver.birthdate);
    if (driver.type === "บุคคลทั่วไป") {
        if (age > 70) {
            driver.status = "หมดอายุ";
        } else if (age < 16) {
            driver.status = "ถูกระงับ";
        }
    } else if (driver.type === "มือใหม่") {
        if (age > 50) {
            driver.status = "หมดอายุ";
        } else if (age < 16) {
            driver.status = "ถูกระงับ";
        }
    } else if (driver.type === "คนขับรถสาธารณะ") {
        if (age > 60) {
            driver.status = "หมดอายุ";
        } else if (age < 20) {
            driver.status = "ถูกระงับ";
        }
    }

    // บันทึกข้อมูลผู้ขับขี่ใน session storage (หรือ local storage)
    sessionStorage.setItem("driver", JSON.stringify(driver));

    // เปลี่ยนหน้าไปยังหน้าแสดงรายละเอียด
    window.location.href = "driver_details.html";
}

// ฟังก์ชันสำหรับจัดการ View ของผู้ขับขี่แต่ละประเภท
function handleDriverView(driver) {
    const driverActions = document.getElementById("driver-actions");
    driverActions.innerHTML = ""; // ล้างการกระทำก่อนหน้า

    const age = calculateAge(driver.birthdate);

    if (driver.type === "บุคคลทั่วไป") {
        renderGeneralDriverView(driver, age, driverActions);
    } else if (driver.type === "มือใหม่") {
        renderNewDriverView(driver, age, driverActions); // เรียกใช้ renderNewDriverView()
    } else if (driver.type === "คนขับรถสาธารณะ") {
        renderPublicDriverView(driver, age, driverActions);
    }
}


// ฟังก์ชันสำหรับ View ของผู้ขับขี่แต่ละประเภท
function renderGeneralDriverView(driver, age, driverActions) {
    if (age > 70) {
        driver.status = "หมดอายุ";
    } else if (age < 16) {
        driver.status = "ถูกระงับ";
    } else {
        let testStarted = false; // ตัวแปรสำหรับตรวจสอบสถานะการทดสอบ

        const testButton = createButton(driverActions, "ทดสอบสมรรถนะ", () => {
            if (!testStarted) {
                testStarted = true;
                testButton.textContent = "สิ้นสุดการทดสอบ";
            } else {
                testStarted = false;
                testButton.textContent = "ทดสอบสมรรถนะ";
                alert("คุณได้สิ้นสุดการทดสอบ");
            }
        });
    }
}


function renderNewDriverView(driver, age, driverActions) {
    // ... (ส่วนอื่น ๆ ของฟังก์ชัน)

    let writtenExamEnded = false;
    let practicalExamEnded = false;

    const writtenExamButton = document.createElement("button");
    writtenExamButton.textContent = "สอบข้อเขียน";
    driverActions.appendChild(writtenExamButton);

    const practicalExamButton = document.createElement("button");
    practicalExamButton.textContent = "สอบปฏิบัติ";
    driverActions.appendChild(practicalExamButton);

    writtenExamButton.addEventListener("click", () => {
        writtenExamEnded = !writtenExamEnded;
        writtenExamButton.textContent = writtenExamEnded ? "สิ้นสุดการสอบข้อเขียน" : "สอบข้อเขียน";
        checkExamsCompletion();
    });

    practicalExamButton.addEventListener("click", () => {
        practicalExamEnded = !practicalExamEnded;
        practicalExamButton.textContent = practicalExamEnded ? "สิ้นสุดการสอบปฏิบัติ" : "สอบปฏิบัติ";
        checkExamsCompletion();
    });

    function checkExamsCompletion() {
        if (writtenExamEnded && practicalExamEnded) {
            changeDriverType(driver);
        }
    }
}

function changeDriverType(driver) {
    driver.type = "บุคคลทั่วไป";
    const driverIndex = drivers.findIndex(d => d.licenseId === driver.licenseId);
    if (driverIndex !== -1) {
        drivers[driverIndex].type = "บุคคลทั่วไป";
    }
    document.getElementById("driver-type").textContent = driver.type;
    sessionStorage.setItem("driver", JSON.stringify(driver));
    handleDriverView(driver);
}





function renderPublicDriverView(driver, age, driverActions) {
    if (age > 60) {
        driver.status = "หมดอายุ";
        document.getElementById("driver-status").textContent = driver.status;
    } else if (age < 20) {
        driver.status = "ถูกระงับ";
        document.getElementById("driver-status").textContent = driver.status;
        const errorElement = document.createElement("p");
        errorElement.textContent = "มีข้อผิดพลาด";
        driverActions.appendChild(errorElement);
    } else {
        const complaints = Math.floor(Math.random() * 11); // สุ่ม 0-10
        const complaintsElement = document.createElement("p");
        complaintsElement.textContent = `จำนวนการร้องเรียน: ${complaints}`;
        driverActions.appendChild(complaintsElement);

        if (complaints > 5) {
            driver.status = "ถูกระงับชั่วคราว";
            document.getElementById("driver-status").textContent = driver.status;

            const trainButton = createButton(driverActions, "อบรม", () => {
                driver.status = "ปกติ";
                document.getElementById("driver-status").textContent = driver.status;
                trainButton.textContent = "สิ้นสุดการอบรม";

                trainButton.addEventListener("click", () => {
                    driver.status = "ปกติ";
                    document.getElementById("driver-status").textContent = driver.status;
                    trainButton.remove();

                    const testButton = createButton(driverActions, "ทดสอบสมรรถนะ", () => {
                        testButton.textContent = "สิ้นสุดการทดสอบ";
                        testButton.addEventListener("click", () => {
                            // ดำเนินการทดสอบสมรรถนะ
                        });
                    });
                });
            });
        } else {
            const testButton = createButton(driverActions, "ทดสอบสมรรถนะ", () => {
                testButton.textContent = "สิ้นสุดการทดสอบ";
                testButton.addEventListener("click", () => {
                    // ดำเนินการทดสอบสมรรถนะ
                });
            });
        }
    }
}

// ฟังก์ชันสำหรับสร้างปุ่ม
function createButton(container, text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    container.appendChild(button);
    return button; // ส่งคืนปุ่มที่สร้าง
}

// ฟังก์ชันสำหรับคำนวณอายุ
function calculateAge(birthdate) {
    const [day, month, year] = birthdate.split("/");
    const birthDate = new Date(`<span class="math-inline">\{year\}\-</span>{month}-${day}`);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// ฟังก์ชันสำหรับรายงานจำนวนผู้ขับขี่ (เรียกเมื่อโหลดหน้าเว็บ)
// ฟังก์ชันสำหรับรายงานจำนวนผู้ขับขี่
function generateReport() {
    const reportData = {};
    drivers.forEach(driver => {
        if (!reportData[driver.type]) {
            reportData[driver.type] = {};
        }
        if (!reportData[driver.type][driver.status]) {
            reportData[driver.type][driver.status] = 0;
        }
        reportData[driver.type][driver.status]++;
    });

    sessionStorage.setItem("reportData", JSON.stringify(reportData));
    window.location.href = "report.html";
}
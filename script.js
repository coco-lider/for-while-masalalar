function for1() {
    let a = parseInt(prompt("a ni kiriting: "));
    let b = parseInt(prompt("b ni kiriting: "));

    if (a < b) {
        let result = "";
        for (let i = a; i <= b; i++) {
            result += i + " ";
        }
        alert("Natija: " + result + "\nChiqarilgan sonlar soni: " + (b - a + 1));
    } else {
        alert("Iltimos, a < b bo'lsin.");
    }
}

function for2() {
    let a = parseInt(prompt("a ni kiriting: "));
    let b = parseInt(prompt("b ni kiriting: "));

    if (a < b) {
        let result = "";
        for (let i = b - 1; i > a; i--) {
            result += i + " ";
        }
        alert("Natija: " + result + "\nChiqarilgan sonlar soni: " + (b - a - 1));
    } else {
        alert("Iltimos, a < b bo'lsin.");
    }
}

function for3() {
    let price = parseFloat(prompt("Bir kg konfetning narxini kiriting: "));
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " kg konfet narxi: " + (price * i).toFixed(2) + "\n";
    }
    alert(result);
}

function for4() {
    let price = parseFloat(prompt("Bir kg konfetning narxini kiriting: "));
    let result = "";
    for (let i = 12; i <= 20; i += 2) {
        result += (i / 10).toFixed(1) + " kg konfet narxi: " + (price * (i / 10)).toFixed(2) + "\n";
    }
    alert(result);
}

function for5() {
    let a = parseInt(prompt("a ni kiriting: "));
    let b = parseInt(prompt("b ni kiriting: "));
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    alert("Yig'indi: " + sum);
}

function for6() {
    let a = parseInt(prompt("a ni kiriting: "));
    let b = parseInt(prompt("b ni kiriting: "));
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= i;
    }
    alert("Ko'paytma: " + product);
}

function for7() {
    let a = parseInt(prompt("a ni kiriting: "));
    let b = parseInt(prompt("b ni kiriting: "));
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i * i;
    }
    alert("Kvadratlar yig'indisi: " + sum);
}

function for8() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    alert("Yig'indi: " + sum.toFixed(2));
}

function for9() {
    let n = parseInt(prompt("n ni kiriting: "));
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= 1 + (i / 10);
    }
    alert("Ko'paytma: " + product.toFixed(2));
}

function for10() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    let result = "";
    for (let i = 1; i <= n; i++) {
        sum += (2 * i - 1);
        result += "1 dan " + i + " gacha kvadrat = " + sum + "\n";
    }
    alert(result);
}

function for11() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= a;
    }
    alert(a + " ning " + n + " darajasi: " + result);
}

function for12() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += a + " ning " + i + " darajasi: " + Math.pow(a, i) + "\n";
    }
    alert(result);
}

function for13() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += a + " ning -" + i + " darajasi: " + Math.pow(a, -i) + "\n";
    }
    alert(result);
}

function for14() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(a, i);
    }
    alert("Yig'indi: " + sum);
}

function for15() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum -= Math.pow(a, i);
        } else {
            sum += Math.pow(a, i);
        }
    }
    alert("Alternatsion yig'indi: " + sum);
}

function for16() {
    let n = parseInt(prompt("n ni kiriting: "));
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    alert(n + " sonining faktoriali: " + factorial);
}

function for17() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        sum += 1 / factorial;
    }
    alert("Yig'indi faktorialga bo'linishi: " + sum.toFixed(6));
}

function for18() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        if (i % 2 === 0) {
            sum -= 1 / factorial;
        } else {
            sum += 1 / factorial;
        }
    }
    alert("Alternatsion yig'indi faktoriallar bo'yicha: " + sum.toFixed(6));
}

function for19() {
    let a = parseFloat(prompt("a ni kiriting: "));
    let n = parseInt(prompt("n ni kiriting: "));
    let product = 1;
    let result = "";
    for (let i = 1; i <= n; i++) {
        product *= a;
        result += a + " ning " + i + " darajasi: " + product + "\n";
    }
    alert(result);
}

function for20() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 1;
    let result = "1 ning yig'indisi = 1\n";
    for (let i = 1; i <= n; i++) {
        sum += 2 * i;
        result += i + " ning yig'indisi = " + sum + "\n";
    }
    alert(result);
}

function while1() {
    let n = parseInt(prompt("n ni kiriting: "));
    let k = 1;
    while (k * k <= n) {
        k++;
    }
    alert("n sonidan ortiq bo'lgan birinchi k soni: " + k);
}

function while2() {
    let n = parseInt(prompt("n ni kiriting: "));
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    alert("Berilgan sonning o'nlik darajalari soni: " + count);
}

function while3() {
    let n = parseInt(prompt("n ni kiriting: "));
    let result = "";
    while (n > 0) {
        result += n % 10 + " ";
        n = Math.floor(n / 10);
    }
    alert("Raqamlar: " + result);
}

function while4() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    alert("Raqamlar yig'indisi: " + sum);
}

function while5() {
    let n = parseInt(prompt("n ni kiriting: "));
    let max = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit > max) {
            max = digit;
        }
        n = Math.floor(n / 10);
    }
    alert("Eng katta raqam: " + max);
}

function while6() {
    let n = parseInt(prompt("n ni kiriting: "));
    let lastDigit = n % 10;
    let isAscending = true;
    while (n > 0) {
        let currentDigit = n % 10;
        if (currentDigit > lastDigit) {
            isAscending = false;
            break;
        }
        lastDigit = currentDigit;
        n = Math.floor(n / 10);
    }
    alert("Tartib: " + (isAscending ? "Ko'tariluvchi" : "Kamayuvchi"));
}

function while7() {
    let n = parseInt(prompt("n ni kiriting: "));
    let result = "";
    while (n > 0) {
        result += n % 10 + " ";
        n = Math.floor(n / 10);
    }
    alert("Raqamlarning kombinatsiyalari: " + result.split(" ").reverse().join(" "));
}

function while8() {
    let n = parseInt(prompt("n ni kiriting: "));
    let product = 1;
    while (n > 0) {
        product *= n % 10;
        n = Math.floor(n / 10);
    }
    alert("Raqamlar ko'paytmasi: " + product);
}

function while9() {
    let n = parseInt(prompt("n ni kiriting: "));
    let sum = 0;
    let product = 1;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        product *= digit;
        n = Math.floor(n / 10);
    }
    alert("Raqamlar yig'indisi: " + sum + "\nRaqamlar ko'paytmasi: " + product);
}

function while10() {
    let n = parseInt(prompt("n ni kiriting: "));
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    alert("Teskari son: " + reversed);
}
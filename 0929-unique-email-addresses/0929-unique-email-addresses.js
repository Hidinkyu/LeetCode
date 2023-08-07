/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for (const email of emails) {
        const cur = email.split('@');
        let local = cur[0];
        const domain = cur[1];
        if (local.includes('+')) {
            temp = local.split('+');
            local = temp[0];
        }
        local = local.replace(/\./g, '');
        set.add(local + '@' + domain)
    }
    return set.size;
};
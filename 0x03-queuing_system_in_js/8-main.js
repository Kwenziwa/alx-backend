/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
import kue from "kue";

import createPushNotificationsJobs from "./8-job.js";

const queue = kue.createQueue();

const list = [
  {
    phoneNumber: "4153518780",
    message: "This is the code 1234 to verify your account",
  },
];
createPushNotificationsJobs(list, queue);

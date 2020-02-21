using System;
using Amazon;
using Amazon.SQS;
using Amazon.SQS.Model;
using Newtonsoft.Json;

namespace ConsoleApp1
{

    public class Study 
    {
        public string StudyName { get; set; }
        public string StudyStartDate { get; set; }
        public string EstimatedCompletionDate { get; set; }
        public string ProtocolID { get; set; }
        public string StudyGroup { get; set; }
        public string Phase { get; set; }
        public string PrimaryIndication { get; set; }
        public string SecondaryIndication { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Creating Aws Queue...........");

            Study s1 = new Study
            {
                StudyName = "s1",
                StudyStartDate = "01 Jan 2010",
                EstimatedCompletionDate = "05 Jan 2019",
                ProtocolID = "ProtocolID1",
                StudyGroup = "Groupd1",
                Phase = "Phase1",
                PrimaryIndication = "Indication 1",
                SecondaryIndication = "Secondary Indication1"
            };
            
          
            IAmazonSQS sqs = new AmazonSQSClient(RegionEndpoint.APSouth1);
            var queueUrl = "https://sqs.ap-south-1.amazonaws.com/066325793814/Cytelpoc.fifo";
            //var sqsRequest = new CreateQueueRequest()
            //{
            //    QueueName = "CytelSimulationQueueTest",
            //};
            //var createQueueResponse = sqs.CreateQueueAsync(sqsRequest).Result;
            //var myQueueQurl = createQueueResponse.QueueUrl;
            //var listQueuesRequest = new ListQueuesRequest();
            //var listQueuesResponse = sqs.ListQueuesAsync(listQueuesRequest);
            //Console.WriteLine("List of Queues");
            //foreach(var queueUrl in listQueuesResponse.Result.QueueUrls)
            //{
            //    Console.WriteLine($"Queue Url: {queueUrl}");
            //}

        var sqsmessageRequest = new SendMessageRequest()
        {
            QueueUrl = queueUrl,
            MessageBody = JsonConvert.SerializeObject(s1),
            MessageGroupId = "CytelMessages1",
            MessageDeduplicationId = "CytemDeduplication66"
        };
        sqs.SendMessageAsync(sqsmessageRequest);
           Console.ReadLine();
        }
    }
}

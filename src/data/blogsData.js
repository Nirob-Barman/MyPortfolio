const blogsData = [
    {
        title: "Simple Task Management System Using ASP.NET MVC (For Beginners)",
        date: "May 4, 2025",
        description: "A beginner-friendly guide to building a simple task management system using ASP.NET MVC, including step-by-step instructions.",
        link: "https://medium.com/@nirob-barman/simple-task-management-system-using-asp-net-mvc-for-beginners-f23c23c205fb"
    },
    {
        title: "অ্যারে (Array) নিয়ে বিস্তারিত — ডেফিনেশন, ডিক্লেয়ারেশন, ইনিশিয়ালাইজেশন এবং প্রসেসিং (C লাংগুয়েজ)",
        date: "April 18, 2025",
        description: "An in-depth look at arrays in C programming, covering definition, declaration, initialization, and processing.",
        link: "https://nirob-barman.medium.com/%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A7%87-array-%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4-%E0%A6%A1%E0%A7%87%E0%A6%AB%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%A1%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%B6%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%9C%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%82-c-%E0%A6%B2%E0%A6%BE%E0%A6%82%E0%A6%97%E0%A7%81%E0%A7%9F%E0%A7%87%E0%A6%9C-a232a53339eb"
    },
    {
        title: "My Journey with C# on SoloLearn: From Beginner to Intermediate",
        date: "April 11, 2025",
        description: "Sharing my experience of learning C# through SoloLearn, progressing from beginner to intermediate level.",
        link: "https://nirob-barman.medium.com/my-journey-with-c-on-sololearn-from-beginner-to-intermediate-03c61ba80c11"
    },
    {
        title: "Insertion Sort: Step-by-Step Explained",
        date: "March 22, 2025",
        description: "A detailed explanation of the Insertion Sort algorithm with step-by-step breakdown and code examples.",
        link: "https://nirob-barman.medium.com/insertion-sort-step-by-step-explained-2663076e7f75"
    },
    {
        title: "From Unsorted to Sorted: A Beginner’s Journey with Selection Sort",
        date: "March 14, 2025",
        description: "An introduction to the Selection Sort algorithm, explaining how to sort an unsorted list step by step.",
        link: "https://nirob-barman.medium.com/from-unsorted-to-sorted-a-beginners-journey-with-selection-sort-c46aa9d49aa9"
    },
    {
        title: "The Bubble Sort Algorithm: A Simple Approach to Sorting Algorithms",
        date: "March 6, 2025",
        description: "Exploring the Bubble Sort algorithm, its working principle, and implementation in C programming.",
        link: "https://nirob-barman.medium.com/the-bubble-sort-algorithm-a-simple-approach-to-sorting-algorithms-8d5155830a2f"
    },
    {
        title: "Exploring Ternary Search: Another Adventure in C Programming",
        date: "February 28, 2025",
        description: "An introduction to the Ternary Search algorithm, its application, and implementation in C.",
        link: "https://nirob-barman.medium.com/exploring-ternary-search-another-adventure-in-c-programming-3c9837d73048"
    },
    {
        title: "Exploring Binary Search: A New Adventure in C Programming",
        date: "February 25, 2025",
        description: "A beginner's guide to understanding and implementing the Binary Search algorithm in C programming.",
        link: "https://nirob-barman.medium.com/exploring-binary-search-a-new-adventure-in-c-programming-7e8a4d3f3b2e"
    },
    {
        title: "Exploring Linear Search: A Beginner’s Journey in C Programming",
        date: "February 21, 2025",
        description: "An introduction to the Linear Search algorithm, its working principle, and implementation in C.",
        link: "https://nirob-barman.medium.com/exploring-linear-search-a-beginners-journey-in-c-programming-a66ae6c3d3ae"
    },
    {
        title: "Abstraction কিভাবে কাজ করে?",
        date: "February 15, 2025",
        description: "A beginner-friendly explanation of the concept of Abstraction in Object-Oriented Programming and how it simplifies complex systems.",
        link: "https://nirob-barman.medium.com/abstraction-কি-ভাবে-কার্যকর-হয়-2d8a4d3f3b2e"
    },
    {
        title: "ইনহেরিটেন্সের মাধ্যমে বেজ এবং ডিরাইভড ক্লাসের সম্পর্ক",
        date: "February 8, 2025",
        description: "An explanation of how inheritance creates a relationship between base and derived classes in Object-Oriented Programming.",
        link: "https://nirob-barman.medium.com/%E0%A6%87%E0%A6%A8%E0%A6%B9%E0%A7%87%E0%A6%B0%E0%A6%BF%E0%A6%9F%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A7%87-%E0%A6%AC%E0%A7%87%E0%A6%9C-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%A1%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AD%E0%A6%A1-%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B8%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%95-6173d5fc014d"
    },
    {
        title: "গল্প: “পলিমরফিজমের জাদু”",
        date: "January 31, 2025",
        description: "নীরবের লেখা এই গল্পে, তিনি পলিমরফিজম ধারণাকে একটি দৈনন্দিন উদাহরণের মাধ্যমে ব্যাখ্যা করেছেন। ক্যালকুলেটরের মাধ্যমে ফাংশন ওভারলোডিংয়ের ধারণা তুলে ধরা হয়েছে।.",
        link: "https://nirob-barman.medium.com/গল্প-পলিমরফিজমের-জাদু-8a4329768be6"
        // link: "https://nirob-barman.medium.com/%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA-%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%AE%E0%A6%B0%E0%A6%AB%E0%A6%BF%E0%A6%9C%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%A6%E0%A7%81-8a4329768be6"
    },
    {
        title: "নীরবের শেখা: এনক্যাপসুলেশন এবং ডেটা সুরক্ষা",
        date: "January 24, 2025",
        description: "Understanding the concept of Abstraction in Object-Oriented Programming and how it works.",
        link: "https://nirob-barman.medium.com/%E0%A6%A8%E0%A7%80%E0%A6%B0%E0%A6%AC%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A7%87%E0%A6%96%E0%A6%BE-%E0%A6%8F%E0%A6%A8%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%B8%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%8F%E0%A6%AC%E0%A6%82-%E0%A6%A1%E0%A7%87%E0%A6%9F%E0%A6%BE-%E0%A6%B8%E0%A7%81%E0%A6%B0%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE-15770865b0cb"
    },
    {
        title: "নীরবের গল্পে Constructor: জীবন ও কোডের প্রথম পরিচিতি",
        date: "January 17, 2025",
        description: "An introduction to constructors in Object-Oriented Programming through a simple story, explaining how they initialize objects in programming.",
        link: "https://nirob-barman.medium.com/%E0%A6%A8%E0%A7%80%E0%A6%B0%E0%A6%AC%E0%A7%87%E0%A6%B0-%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87-constructor-%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8-%E0%A6%93-%E0%A6%95%E0%A7%8B%E0%A6%A1%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%BF%E0%A6%A4%E0%A6%BF-945082dfff6b"
    },
    {
        title: "Introduction to Classes and Objects in Object-Oriented Programming (OOP)",
        date: "January 12, 2025",
        description: "A beginner-friendly guide to understanding the basics of classes and objects in Object-Oriented Programming (OOP).",
        link: "https://nirob-barman.medium.com/introduction-to-classes-and-objects-in-object-oriented-programming-oop-b8cd582a85a9"
    },
    {
        title: "Mastering Object-Oriented Programming (OOP) Principles",
        date: "October 24, 2024",
        description: "A guide to understanding key Object-Oriented Programming concepts like Abstraction, Encapsulation, Inheritance, and Polymorphism.",
        link: "https://nirob-barman.medium.com/mastering-object-oriented-programming-oop-principles-447a17258ff7"
    },
    {
        title: "Mastering jQuery Selectors: A Comprehensive Guide",
        date: "October 2, 2024",
        description: "An easy guide to using jQuery selectors, covering IDs, classes, elements, visibility, and more with simple examples.",
        link: "https://nirob-barman.medium.com/mastering-jquery-selectors-a-comprehensive-guide-d5bd046c6b8c"
    },
    {
        title: "🌟 MySQL Cheat Sheet for Beginners 🌟",
        date: "October 1, 2024",
        description: "A simple guide to MySQL basics for beginners, covering common SQL commands like SELECT, INSERT, UPDATE, DELETE, and JOINs.",
        link: "https://nirob-barman.medium.com/mysql-cheat-sheet-for-beginners-a5fe4ea61667"
    },
    {
        title: "🌟 JavaScript DOM Methods Cheat Sheet 🌟",
        date: "September 29, 2024",
        description: "This article is a simple guide to common JavaScript DOM methods. It shows how to get elements, change content, update styles, and work with classes. Great for beginners learning how to use JavaScript with HTML.",
        link: "https://nirob-barman.medium.com/javascript-dom-methods-cheat-sheet-33f3076308c0"
    }
];

export default blogsData;

import unittest
from patterns import print_pattern_one, print_pattern_two, print_pattern_three

class TestPatterns(unittest.TestCase):

    def test_pattern_one(self):
        expected_output = "\n".join([" ".join(map(str, range(10)))] * 10)
        self.assertEqual(print_pattern_one(), expected_output)

    def test_pattern_two(self):
        expected_output = "\n".join([" ".join(map(str, range(i + 1))) for i in range(10)])
        self.assertEqual(print_pattern_two(), expected_output)

    def test_pattern_three(self):
        lines = []
        for i in range(10):
            spaces = "  " * i
            numbers = " ".join(map(str, range(10 - i)))
            lines.append(spaces + numbers)
        expected_output = "\n".join(lines)
        self.assertEqual(print_pattern_three(), expected_output)

if __name__ == '__main__':
    unittest.main()

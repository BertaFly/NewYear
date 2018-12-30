<?php

namespace App\Controllers;
use App\Models\Model;

class TaskController extends Controller
{
	public function team_start_time($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$startTime = $request->getParam('time');
		$db = new Model;
		$db = $db->connect();
		$sql = $db->insert(array('team_name', 'start_time'))->into('general')->values(array($teamName, $startTime));
		$exec = $sql->execute(false);
		return json_encode(true);
	}
	
	public function get_total_points($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$db = new Model;
		$db = $db->connect();
		$sql = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $sql->execute();
		$data = $stmt->fetch();
		$res = $data == false ? 0 : $data['total_points'];
		return json_encode($res);
	}

	public function has_solved($request, $response)
	{
		$db = new Model;
		$db = $db->connect();
		$sql = $db->select()->from($request->getParam('teamName'))->where('task', '=', $request->getParam('task'));
		$stmt = $sql->execute();
		$data = $stmt->fetch();
		$res = $data == false ? false : true;
		return json_encode($res);
	}

	public function first_task($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('time');
		$answers = $request->getParam('answers');
		$attempt = $request->getParam('try');
		$points = 0;
		$arrayToMatch = ['kea1', '3ze5', 'fc1v', 's7hx', 'j4w2'];
		for ($i = 0; $i < count($answers); $i++) {
			$tmp = strtolower($answers[$i]);
			$points = in_array($tmp, $arrayToMatch) ? $points + 20 : $points;
		}
		$db = new Model;
		$db = $db->connect();
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $getTotalPoints->execute();
		$data = $stmt->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
			$sql = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, 0, $start, implode(", ", $answers), $points));
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt2 = $getPreviousPoints->execute();
			$previousPoints = $stmt2->fetch();
			$points = $attempt === 2 ? $points * 0.8 : $points * 0.6;
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
			$sql = $db->update(array('points' => $points, 'answers' => implode(", ", $answers)))->table($teamName)->where('task', '=', $task);
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		}
		$exec = $sql->execute();
		$exec2 = $sql2->execute();

		return json_encode(array('points' => $points, 'total' => $totalPoints));
	}

	public function second_task($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('time');
		$answers = $request->getParam('answers');
		$attempt = $request->getParam('try');
		$points = 0;
		$arrayToMatch = ['ja', 'we', 'uz', 'yg', 'rx'];
		for ($i = 0; $i < count($answers); $i++) {
			$tmp = strtolower($answers[$i]);
			$points = in_array($tmp, $arrayToMatch) ? $points + 20 : $points;
		}
		$db = new Model;
		$db = $db->connect();
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $getTotalPoints->execute();
		$data = $stmt->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
			$sql = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, 0, $start, implode(", ", $answers), $points));
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt2 = $getPreviousPoints->execute();
			$previousPoints = $stmt2->fetch();
			$points = $attempt === 2 ? $points * 0.8 : $points * 0.6;
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
			$sql = $db->update(array('points' => $points, 'answers' => implode(", ", $answers)))->table($teamName)->where('task', '=', $task);
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		}
		$exec = $sql->execute();
		$exec2 = $sql2->execute();

		return json_encode(array('points' => $points));
	}

	public function third_task($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('time');
		$answers = $request->getParam('answers');
		$attempt = $request->getParam('try');
		$points = 0;
		$arrayToMatch = ['champagne', 'orange', 'milk', 'cream', 'ice', 'tube'];
		for ($k = 0; $k < count($arrayToMatch); $k++) {
			for ($i = 0; $i < count($answers); $i++) {
				$tmp = strtolower($answers[$i]);
				if (strpos($answers[$i], $arrayToMatch[$k]) !== false){
					$points += 20;
					break ;
				}
			}
			
		}
		$db = new Model;
		$db = $db->connect();
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $getTotalPoints->execute();
		$data = $stmt->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
			$sql = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, 0, $start, implode(", ", $answers), $points));
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt2 = $getPreviousPoints->execute();
			$previousPoints = $stmt2->fetch();
			$points = $attempt === 2 ? $points * 0.8 : $points * 0.6;
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
			$sql = $db->update(array('points' => $points, 'answers' => implode(", ", $answers)))->table($teamName)->where('task', '=', $task);
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		}
		$exec = $sql->execute();
		$exec2 = $sql2->execute();

		return json_encode(array('points' => $points));
	}

	public function forth_task($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('time');
		$answers = $request->getParam('answers');
		$answer = strtolower($answers[0]);
		$attempt = $request->getParam('try');
		$strToMatch = 'tetrahydrocannabinol';
		$points = $answer === $strToMatch ? 100 : 0;

		$db = new Model;
		$db = $db->connect();
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $getTotalPoints->execute();
		$data = $stmt->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
			$sql = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, 0, $start, $answer, $points));
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt2 = $getPreviousPoints->execute();
			$previousPoints = $stmt2->fetch();
			$points = $attempt === 2 ? $points * 0.8 : $points * 0.6;
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
			$sql = $db->update(array('points' => $points, 'answers' => $answer))->table($teamName)->where('task', '=', $task);
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		}
		$exec = $sql->execute();
		$exec2 = $sql2->execute();

		return json_encode(array('points' => $points));
	}
	
	public function five_start($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('start');
		$db = new Model;
		$db = $db->connect();
		$sql = $db->select()->from($teamName)->where('task', '=', $task);
		$stmt = $sql->execute();
		$checkIfStarted = $stmt->fetch();
		if (!$checkIfStarted) {
			$insertSQL = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, $start, 0, "", 0));
			$exec = $insertSQL->execute();
			return json_encode(array('status' => 'Started count time for this task'));
		}
		return json_encode(array('status' => 'Time has been started to count previously'));
	}

	public function five_validate($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$attempt = $request->getParam('try');
		$end = $request->getParam('endTime');
		$answers = $request->getParam('answers');
		$answer = strtolower($answers[0]);
		$strToMatch = 'sybil system';
		$points = 0;
		$db = new Model;
		$db = $db->connect();
		if ($answer === $strToMatch) {
			$sql = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt = $sql->execute();
			$getTaskTime = $stmt->fetch();
			$totalTime = $end - $getTaskTime['start_time'];
			if ($totalTime <= 210000) {
				$points = 100;
			} else if (210000 < $totalTime && $totalTime < 270000) {
				$points = 80;
			} else {
				$points = 60;
			}
		}
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt2 = $getTotalPoints->execute();
		$data = $stmt2->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt3 = $getPreviousPoints->execute();
			$previousPoints = $stmt3->fetch();
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
		}
		$sql2 = $db->update(array('end_time' => $end, 'answers' => $answer, 'points' => $points))->table($teamName)->where('task', '=', $task);
		$exec = $sql2->execute();
		$sql3 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		$exec2 = $sql3->execute();
		return json_encode(array('points' => $points));
	}

	public function sixth_task($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$task = $request->getParam('task');
		$start = $request->getParam('time');
		$answers = $request->getParam('answers');
		$answer = strtolower($answers[0]);
		$attempt = $request->getParam('try');
		switch ($teamName) {
			case 'oblachnyi_atlas':
				$strToMatch = 'sansara';
				break;
			case 'spyce_i_chervi':
				$strToMatch = 'arrakis';
				break;
			case 'kletki_svyazany':
				$strToMatch = 'nexus';
				break;
			case 'prizraki_v_dospehah':
				$strToMatch = 'hanka';
				break;
			case 'furioza_i_7maxo':
				$strToMatch = 'citadel';
				break;
		}
		$points = $answer === $strToMatch ? 40 : 0;
		$db = new Model;
		$db = $db->connect();
		$getTotalPoints = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $getTotalPoints->execute();
		$data = $stmt->fetch();
		$totalPoints = $data['total_points'];
		if ($attempt === 1) {
			$totalPoints = $totalPoints + $points;
			$sql = $db->insert(array('task', 'start_time', 'end_time', 'answers', 'points'))->into($teamName)->values(array($task, 0, $start, $answer, $points));
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		} else {
			$getPreviousPoints = $db->select()->from($teamName)->where('task', '=', $task);
			$stmt2 = $getPreviousPoints->execute();
			$previousPoints = $stmt2->fetch();
			$points = $attempt === 2 ? $points * 0.8 : $points * 0.6;
			$totalPoints = $totalPoints - $previousPoints['points'] + $points;
			$sql = $db->update(array('points' => $points, 'answers' => $answer))->table($teamName)->where('task', '=', $task);
			$sql2 = $db->update(array('total_points' => $totalPoints))->table('general')->where('team_name', '=', $teamName);
		}
		$exec = $sql->execute();
		$exec2 = $sql2->execute();

		return json_encode(array('points' => $points));
	}

	public function sendMail($email, $body, $subject)
	{
		$encoding = "utf-8";
		$subject_preferences = array(
			"input-charset" => $encoding,
			"output-charset" => $encoding,
			"line-length" => 76,
			"line-break-chars" => "\r\n"
		);
		$header = "Content-type: text/html; charset=".$encoding." \r\n";
		$header .= "From: Matcha@web.com \r\n";
		$header .= "MIME-Version: 1.0 \r\n";
		$header .= "Content-Transfer-Encoding: 8bit \r\n";
		$header .= "Date: ".date("r (T)")." \r\n";
		$header .= iconv_mime_encode("Subject", $subject, $subject_preferences);
		mail($email, $subject, $body, $header);
	}

	public function final($request, $response)
	{
		$teamName = $request->getParam('teamName');
		$endTime = $request->getParam('time');
		$db = new Model;
		$db = $db->connect();
		$test = $db->select()->from('general')->where('team_name', '=', $teamName);
		$stmt = $test->execute();
		$data = $stmt->fetch();
		$time = 0;
		if ($data['end_time'] === NULL) {
			$sql = $db->update(array('end_time' => $endTime))->table('general')->where('team_name', '=', $teamName);
			$exec = $sql->execute();
			$time = floor(($endTime - $data['start_time']) / 1000);
		} else {
			$time = floor(($data['end_time'] - $data['start_time']) / 1000);
		}
		$this->sendMail('ishtar929@gmail.com', "Команда " . $teamName . "прошла, стартанула: " . $data['start_time'] . ", окончила: " . $data['end_time'] . ", с результатом: " . $data['total_point'], "Finish " . $teamName);
		return json_encode(array('total' => $data['total_points'], 'time' => $time, 'res' => $data));
	}	
}
